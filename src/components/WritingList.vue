<template>
  <div class="item-list">
    <WritingItem
      v-for="item in writing"
      :key="item.id"
      :title="item.title"
      :content="item.content"
    />
    <PlzEnjoy v-if="!writing.length" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import WritingItem from './WritingItem.vue'
import PlzEnjoy from '@/components/PlzEnjoy.vue'

const writing = ref([])

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:5000/writings')
    writing.value = response.data || []
  } catch (error) {
    console.error('Error fetching writing:', error)
    writing.value = []
  }
})
</script>

<style scoped></style>
