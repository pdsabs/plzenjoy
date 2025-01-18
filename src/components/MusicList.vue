<template>
  <div class="item-list">
    <MusicItem
      v-for="item in music"
      :key="item.id"
      :spotifyUrl="item.spotifyurl"
      :content="item.content"
    />
    <PlzEnjoy v-if="!music.length" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from '@/services/axios'
import MusicItem from './MusicItem.vue'
import PlzEnjoy from '@/components/PlzEnjoy.vue'

const music = ref([])

onMounted(async () => {
  try {
    const response = await axios.get('/music')
    music.value = response.data || []
  } catch (error) {
    console.error('Error fetching music:', error)
    music.value = []
  }
})
</script>

<style scoped></style>
