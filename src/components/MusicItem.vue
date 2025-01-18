<template>
  <div class="item-card">
    <iframe
      :src="spotifyUrl"
      allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
    <p>{{ content }}</p>
  </div>
</template>

<script setup>
defineProps({
  spotifyUrl: {
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
iframe {
  width: 100%;
  height: 152px;
  border: 0;
  border-radius: 12px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 8px;
}
</style>
