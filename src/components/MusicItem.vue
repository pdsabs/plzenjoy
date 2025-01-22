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

<template>
  <div class="item-card">
    <iframe
      :src="spotifyUrl"
      style="opacity: 0; transition: opacity 0.3s ease"
      onload="this.style.opacity=1"
      allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
    <p>{{ content }}</p>
  </div>
</template>

<style scoped>
iframe {
  width: 100%;
  height: 152px;
  border: 0;
  border-radius: 12px;
  box-shadow: 0 2px 5px var(--color-shadow);
  margin-bottom: 8px;
}
</style>
