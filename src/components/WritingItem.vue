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
  border: 1px solid;
  border-radius: 12px;
  padding: 16px;
  margin: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 5px rgb(28, 255, 0);
}
</style>
