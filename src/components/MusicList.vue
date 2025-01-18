<template>
  <div class="item-list">
    <PlzEnjoy v-if="isLoading" />
    <MusicItem
      v-else-if="music.length"
      v-for="item in music"
      :key="item.id"
      :spotifyUrl="item.spotifyurl"
      :content="item.content"
    />
    <h3 v-else>No music exists.</h3>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from '@/services/axios'
import MusicItem from './MusicItem.vue'
import PlzEnjoy from '@/components/PlzEnjoy.vue'

const isLoading = ref(true)
const music = ref([])
const MIN_ANIMATION_TIME = 3000

onMounted(async () => {
  const startTime = Date.now()

  try {
    const response = await axios.get('/music')
    music.value = response.data || []

    const elapsedTime = Date.now() - startTime
    if (elapsedTime < MIN_ANIMATION_TIME) {
      await new Promise((resolve) => setTimeout(resolve, MIN_ANIMATION_TIME - elapsedTime))
    }

    isLoading.value = false
  } catch (error) {
    console.error('Error fetching music:', error)
    music.value = []
  }
})
</script>

<style scoped></style>
