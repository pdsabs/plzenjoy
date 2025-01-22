<script setup>
import { ref, onMounted } from 'vue'
import axios from '@/services/axios'
import WritingItem from './WritingItem.vue'
import PlzEnjoy from '@/components/PlzEnjoy.vue'

const isLoading = ref(true)
const writing = ref([])
const MIN_ANIMATION_TIME = 2000

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

<template>
  <div class="item-list">
    <PlzEnjoy v-if="isLoading" />
    <transition-group name="fade" tag="div" class="item-list" v-else-if="writing.length">
      <WritingItem
        v-for="(item, index) in writing"
        :key="item.id"
        :title="item.title"
        :content="item.content"
        :style="{ animationDelay: `${index * 0.2}s`, opacity: 0 }"
      />
    </transition-group>
    <h3 v-else>No writings exist.</h3>
  </div>
</template>

<style scoped>
.item-list > * {
  animation: fadeIn 0.5s ease forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
