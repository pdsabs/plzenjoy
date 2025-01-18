import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: '0.0.0.0', // Allows access from any network interface
    port: 5173, // Default Vite port
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Backend server on port 5000
        changeOrigin: true, // Adjust the origin header to match the target
        rewrite: (path) => path.replace(/^\/api/, ''), // Optional: Remove '/api' prefix if not used in backend
      },
    },
  },
})
