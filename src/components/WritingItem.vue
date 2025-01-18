<template>
  <div class="writing-item-card">
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>
  </div>
</template>

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

<style scoped>
.writing-item-card {
  padding: 16px;
  margin: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-card);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
