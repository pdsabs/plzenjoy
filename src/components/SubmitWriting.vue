<script setup>
import { ref, onMounted, watch } from 'vue'
import axios from '@/services/axios.js'

const title = ref('')
const content = ref('')

// Key for storing data in localStorage
const storageKey = 'writingSubmission'

// Save form data to localStorage
const saveWork = () => {
  const dataToSave = {
    title: title.value,
    content: content.value,
  }
  localStorage.setItem(storageKey, JSON.stringify(dataToSave))
}

const restoreWork = () => {
  const savedData = localStorage.getItem(storageKey)
  if (savedData) {
    const parsedData = JSON.parse(savedData)
    title.value = parsedData.title || ''
    content.value = parsedData.content || ''
  }
}

watch([title, content], saveWork)

onMounted(() => {
  restoreWork()
})

const handleSubmit = async () => {
  try {
    const token = localStorage.getItem('authToken')

    const response = await axios.post(
      '/submit-writing',
      {
        title: title.value,
        content: content.value,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )

    localStorage.removeItem(storageKey)

    title.value = ''
    content.value = ''

    console.log('Submission Successful:', response.data)
  } catch (error) {
    console.error('Submission Error:', error)
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
