<script setup>
import { ref, onMounted, watch } from 'vue'
import axios from '@/services/axios.js'

const spotifyUrl = ref('')
const content = ref('')

// Key for storing data in localStorage
const storageKey = 'musicSubmission'

// Save form data to localStorage
const saveWork = () => {
  const dataToSave = {
    spotifyUrl: spotifyUrl.value,
    content: content.value,
  }
  localStorage.setItem(storageKey, JSON.stringify(dataToSave))
}

const restoreWork = () => {
  const savedData = localStorage.getItem(storageKey)
  if (savedData) {
    const parsedData = JSON.parse(savedData)
    spotifyUrl.value = parsedData.spotifyUrl || ''
    content.value = parsedData.content || ''
  }
}

watch([spotifyUrl, content], saveWork)

onMounted(() => {
  restoreWork()
})

const handleSubmit = async () => {
  try {
    const token = localStorage.getItem('authToken')

    const response = await axios.post(
      '/submit-music',
      {
        spotifyUrl: spotifyUrl.value,
        content: content.value,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    )

    localStorage.removeItem(storageKey)

    console.log('Submission Successful:', response.data)
  } catch (error) {
    console.error('Submission Error:', error)
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
      <button type="submit" class="login-button" :disabled="!spotifyUrl">Submit Music</button>
    </form>
  </div>
</template>

<style scoped></style>
