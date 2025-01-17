<template>
  <div class="music-item-card">
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
.music-item-card {
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 16px;
  margin: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.music-item-card iframe {
  margin-bottom: 8px;
}

iframe {
  width: 100%;
  height: 152px;
  border: 0;
  /* Optional styles */
  border-radius: 12px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
</style>
