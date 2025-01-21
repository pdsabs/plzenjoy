<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="item-card">
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>
  </div>
</template>

<style scoped></style>
