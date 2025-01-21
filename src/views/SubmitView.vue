<script setup>
import SubmitWriting from '@/components/SubmitWriting.vue'
import SubmitMusic from '@/components/SubmitMusic.vue'
import axios from '@/services/axios'
import { onMounted } from 'vue'

onMounted(async () => {
  const token = localStorage.getItem('authToken')

  try {
    const response = await axios.post('/validate-token', null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    console.log(response.status)

    if (!response.data.valid) {
      alert(
        'Your session has expired or your token is invalid. Please log in again to submit your work.',
      )
    }
  } catch (error) {
    console.error('Token validation failed:', error.response?.data || error.message)
    alert(
      'Your session has expired or your token is invalid. Please log in again to submit your work.',
    )
  }
})
</script>

<template>
  <div class="center-center-flex">
    <div class="item-list">
      <SubmitWriting />
      <SubmitMusic />
    </div>
  </div>
</template>

<style scoped></style>
