<script setup>
import SubmitWriting from '@/components/SubmitWriting.vue'
import SubmitMusic from '@/components/SubmitMusic.vue'
import axios from '@/services/axios'
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

onMounted(async () => {
  const token = localStorage.getItem('authToken')

  if (!token) {
    alert('You are not logged in. Please log in to access this page.')
    console.log('No token found, redirecting to login.')
    await router.push('/login')
    return
  }

  try {
    const response = await axios.post('/validate-token', null, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })

    if (!response.data.valid) {
      alert('Your session has expired. Please log in again.')
      console.log('Invalid token, redirecting to login.')
      await router.push('/login')
    }
  } catch (error) {
    alert('An error occurred while validating your session. Please log in again.')
    console.error('Token validation failed:', error.response?.data || error.message)
    await router.push('/login')
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
