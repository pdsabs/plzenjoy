<template>
  <div class="login-view">
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="username">Username</label>
        <input
          autocomplete="username"
          type="text"
          id="username"
          v-model="username"
          placeholder="Enter your username"
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
          placeholder="Enter your password"
          required
        />
      </div>

      <button type="submit" class="login-button" :disabled="isLoading">
        {{ isLoading ? 'Logging in...' : 'Login' }}
      </button>

      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from '@/services/axios'

const username = ref('')
const password = ref('')
const errorMessage = ref(null)
const isLoading = ref(false)

const handleLogin = async () => {
  errorMessage.value = null
  isLoading.value = true

  try {
    const response = await axios.post('/login', {
      username: username.value,
      password: password.value,
    })

    if (response.status === 200 && response.data.token) {
      localStorage.setItem('authToken', response.data.token)
      window.location.href = '/'
    } else {
      throw new Error('Invalid credentials')
    }
  } catch (error) {
    errorMessage.value = 'Username or password is incorrect.'
    console.error('Login error:', error)
  } finally {
    isLoading.value = false
  }
}
</script>

<style scoped>
.login-view {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

.form-group {
  margin-bottom: 16px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 8px;
}

input {
  width: 100%;
  padding: 8px;
  font-size: 16px;
  border: 1px solid var(--color-border);
  border-radius: 4px;
}

input:focus {
  outline: none;
  border-color: var(--color-border);
  box-shadow: 0 0 4px rgba(74, 144, 226, 0.5);
}

.login-button {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: var(--color-text);
  background-color: var(--color-background);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-button:disabled {
  background-color: #aaa;
  cursor: not-allowed;
}

.login-button:hover:not(:disabled) {
  background-color: var(--color-background-mute);
}

.error-message {
  margin-top: 16px;
  color: red;
  font-size: 14px;
}
</style>
