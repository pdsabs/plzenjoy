<template>
  <div class="vertical-center-flex">
    <p v-if="writing">
      {{ writing }}
    </p>
    <PlzEnjoy v-else />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import PlzEnjoy from '@/components/PlzEnjoy.vue' // Import Axios

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

<style></style>
