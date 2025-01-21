<script setup>
import { ref } from 'vue'
import axios from '@/services/axios.js'

const spotifyUrl = ref('')
const content = ref('')

const handleSubmit = async () => {
  try {
    const response = await axios.post('/submit-music', {
      spotifyUrl: spotifyUrl.value,
      content: content.value,
    })
  } catch (error) {
    console.error('Submission Error:', error)
  } finally {
  }
}
</script>

<template>
  <div class="item-card">
    <h3>Music</h3>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label>URL: <input v-model="spotifyUrl" required /></label>
      </div>
      <div class="form-group">
        <label
          >Text:
          <textarea
            v-model="content"
            rows="4"
            cols="50"
            placeholder="plz share here..."
            required
          ></textarea>
        </label>
      </div>
      <button type="submit" class="login-button">Submit Music</button>
    </form>
  </div>
</template>

<style scoped></style>
