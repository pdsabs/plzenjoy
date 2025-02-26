const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const { Pool } = require('pg')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 5000
const SECRET_KEY = process.env.SECRET_KEY

// PostgreSQL configuration
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
})

pool.connect((err) => {
  if (err) {
    console.error('Error connecting to PostgreSQL:', err.message)
  } else {
    console.log('Connected to PostgreSQL database')
  }
})

// Middleware
app.use(cors())
app.use(bodyParser.json())

const ADMIN_USERNAME = process.env.ADMIN_USERNAME
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD

// Helper function to verify tokens
function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization']
  if (!authHeader) {
    return res.status(403).json({ valid: false, message: 'No token provided.' })
  }
  const token = authHeader.split(' ')[1]
  try {
    jwt.verify(token, SECRET_KEY)
    next()
  } catch (_) {
    res.status(401).json({ message: 'Invalid or expired token.' })
  }
}

// Routes

// Validate token route
app.post('/validate-token', (req, res) => {
  const authHeader = req.headers['authorization']

  if (!authHeader) {
    return res.status(403).json({ valid: false, message: 'No token provided.' })
  }

  // Extract the token (remove the "Bearer " prefix)
  const token = authHeader.split(' ')[1]

  if (!token) {
    return res.status(403).json({ valid: false, message: 'No token provided.' })
  }

  try {
    jwt.verify(token, SECRET_KEY)
    res.status(200).json({ valid: true, message: 'Token is valid.' })
  } catch (_) {
    res.status(401).json({ valid: false, message: 'Invalid or expired token.' })
  }
})

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '2h' })
    res.json({ message: 'Login successful', token })
  } else {
    res.status(401).json({ message: 'Invalid credentials' })
  }
})

// Submit writing route
app.post('/submit-writing', verifyToken, async (req, res) => {
  const { title, content } = req.body
  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required.' })
  }

  try {
    const result = await pool.query(
      'INSERT INTO writing (title, content, created) VALUES ($1, $2, NOW()) RETURNING *',
      [title, content],
    )
    res.status(201).json({ message: 'Writing submitted successfully', poem: result.rows[0] })
  } catch (err) {
    console.error('Error inserting writing:', err)
    res.status(500).json({ message: 'Internal server error' })
  }
})

// Submit music route
app.post('/submit-music', verifyToken, async (req, res) => {
  const { spotifyUrl, content } = req.body

  // Regular expression to validate Spotify embedded track URL
  const spotifyUrlRegex = /^https:\/\/open\.spotify\.com\/embed\/track\/[a-zA-Z0-9]+(\?.*)?$/

  if (!spotifyUrl || !content) {
    return res.status(400).json({ message: 'Spotify URL and text content are required.' })
  }

  // Validate the Spotify URL
  if (!spotifyUrlRegex.test(spotifyUrl)) {
    return res
      .status(400)
      .json({ message: 'Invalid Spotify URL. It must be an embedded track link.' })
  }

  try {
    const result = await pool.query(
      'INSERT INTO music (spotifyurl, content, created) VALUES ($1, $2, NOW()) RETURNING *',
      [spotifyUrl, content],
    )
    res.status(201).json({ message: 'Music submitted successfully', music: result.rows[0] })
  } catch (err) {
    console.error('Error inserting music:', err)
    res.status(500).json({ message: 'Internal server error' })
  }
})

// Get all writings
app.get('/writings', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM writing ORDER BY created DESC')
    res.json(result.rows)
  } catch (err) {
    console.error('Error fetching writings:', err)
    res.status(500).json({ message: 'Internal server error' })
  }
})

// Get all music entries
app.get('/music', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM music ORDER BY created DESC')
    res.json(result.rows)
  } catch (err) {
    console.error('Error fetching music entries:', err)
    res.status(500).json({ message: 'Internal server error' })
  }
})

// Start the server
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`)
})
