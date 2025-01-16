<template>
  <div class="vertical-center-flex">
    <p v-if="writing">
      {{ writing }}
    </p>
    <p v-else>Loading...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios' // Import Axios

const writing = ref(null)

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:5000/writings')

    // Assuming the response is an array, get the first writing's content
    writing.value = response.data[0]?.content || 'No writings found.'
  } catch (error) {
    console.error('Error fetching writings:', error)
    writing.value = 'Failed to load writings.'
  }
})
</script>

<style>
@media (min-width: 1024px) {
  .vertical-center-flex {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
