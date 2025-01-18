import axios from 'axios'

const instance = axios.create({
  baseURL: '/api', // Matches the Vite proxy prefix
  timeout: 5000, // Optional: Request timeout
})

export default instance
