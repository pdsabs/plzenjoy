<template>
  <div class="item-list">
    <PlzEnjoy v-if="isLoading" />
    <WritingItem
      v-else-if="writing.length"
      v-for="item in writing"
      :key="item.id"
      :title="item.title"
      :content="item.content"
    />
    <h3 v-else>No writings exist.</h3>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from '@/services/axios'
import WritingItem from './WritingItem.vue'
import PlzEnjoy from '@/components/PlzEnjoy.vue'

const isLoading = ref(true)
const writing = ref([])
const MIN_ANIMATION_TIME = 3000

onMounted(async () => {
  const startTime = Date.now()

  try {
    const response = await axios.get('/writings')
    writing.value = response.data || []

    const elapsedTime = Date.now() - startTime
    if (elapsedTime < MIN_ANIMATION_TIME) {
      await new Promise((resolve) => setTimeout(resolve, MIN_ANIMATION_TIME - elapsedTime))
    }

    isLoading.value = false
  } catch (error) {
    console.error('Error fetching writing:', error)
    writing.value = []
  }
})
</script>

<style scoped></style>
