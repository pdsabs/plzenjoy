const express = require('express')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT
const SECRET_KEY = process.env.SECRET_KEY

// In-memory storage for writings and music (for simplicity)
const writings = []
const musicEntries = []

// Middleware
app.use(cors())
app.use(bodyParser.json())

// Dummy admin credentials (replace with environment variables or secure storage)
const ADMIN_USERNAME = process.env.ADMIN_USERNAME
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD

// Helper function to verify tokens
function verifyToken(req, res, next) {
  const token = req.headers['authorization']
  if (!token) {
    return res.status(403).json({ message: 'No token provided.' })
  }
  try {
    jwt.verify(token, SECRET_KEY)
    next()
  } catch (_) {
    res.status(401).json({ message: 'Invalid or expired token.' })
  }
}

// Routes

// Login route
app.post('/login', (req, res) => {
  const { username, password } = req.body
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' })
    res.json({ message: 'Login successful', token })
  } else {
    res.status(401).json({ message: 'Invalid credentials' })
  }
})

// Submit writing route
app.post('/submit-writing', verifyToken, (req, res) => {
  const { title, content } = req.body
  if (!title || !content) {
    return res.status(400).json({ message: 'Title and content are required.' })
  }
  const poem = {
    id: writings.length + 1,
    title,
    content,
    createdAt: new Date(),
  }
  writings.push(poem)
  res.status(201).json({ message: 'Writing submitted successfully', poem })
})

// Submit music route
app.post('/submit-music', verifyToken, (req, res) => {
  const { spotifyUrl, note } = req.body
  if (!spotifyUrl || !note) {
    return res.status(400).json({ message: 'Spotify URL and note are required.' })
  }
  const music = {
    id: musicEntries.length + 1,
    spotifyUrl,
    note,
    createdAt: new Date(),
  }
  musicEntries.push(music)
  res.status(201).json({ message: 'Music submitted successfully', music })
})

// Get all writings (optional, for testing)
app.get('/writings', (req, res) => {
  res.json(writings)
})

// Get all music entries (optional, for testing)
app.get('/music', (req, res) => {
  res.json(musicEntries)
})

// Start the server
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`)
})
