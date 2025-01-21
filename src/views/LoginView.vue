<script setup>
import { ref } from 'vue'
import axios from '@/services/axios'

const username = ref('')
const password = ref('')
const errorMessage = ref(null)

const handleLogin = async () => {
  errorMessage.value = null

  try {
    const response = await axios.post('/login', {
      username: username.value,
      password: password.value,
    })

    if (response.data.token) {
      localStorage.setItem('authToken', response.data.token)
      window.location.href = '/submit'
    }
  } catch (error) {
    if (error.response) {
      if (error.response.status === 401) {
        errorMessage.value = 'Invalid credentials.'
      } else {
        errorMessage.value = `Error: ${error.response.status} - ${error.response.data.message || 'An error occurred.'}`
      }
    } else if (error.request) {
      errorMessage.value = 'Network error. Please check your connection.'
    } else {
      errorMessage.value = `Unexpected error: ${error.message}`
    }
  }
}
</script>

<template>
  <div class="item-card">
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="username">Username</label>
        <input
          autocomplete="username"
          type="text"
          id="username"
          v-model="username"
          placeholder="enter user"
          required
        />
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input
          autocomplete="current-password"
          type="password"
          id="password"
          v-model="password"
          placeholder="enter password"
          required
        />
      </div>

      <button type="submit" class="login-button" :disabled="!username || !password">Login</button>

      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<style scoped>
.error-message {
  margin-top: 16px;
  color: red;
  font-size: 14px;
}
</style>
