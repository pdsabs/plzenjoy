<script setup>
import { ref } from 'vue'
import axios from '@/services/axios.js'

const title = ref('')
const content = ref('')

const handleSubmit = async () => {
  try {
    const response = await axios.post('/submit-writing', {
      title: title.value,
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
    <h3>Writing</h3>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label>Title: <input v-model="title" required /></label>
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
      <button type="submit" class="login-button" :disabled="!title || !content">
        Submit Writing
      </button>
    </form>
  </div>
</template>

<style scoped></style>
