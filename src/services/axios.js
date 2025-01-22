import axios from 'axios'

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // Matches the Vite proxy prefix
  timeout: 5000, // Optional: Request timeout
})

export default instance
