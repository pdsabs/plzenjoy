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
  background-color: var(--color-card);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 100%; /* Default for mobile */
  max-width: 100%; /* Prevent overflow */
  box-sizing: border-box; /* Include padding in width calculation */
}

.music-item-card p {
  text-align: left; /* Aligns text to the left */
  width: 100%; /* Ensures it spans the full width of the card */
  margin-top: 8px; /* Adds spacing between iframe and text */
}

/* Iframe styles */
.music-item-card iframe {
  width: 100%;
  height: 152px;
  border: 0;
  border-radius: 12px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 8px;
}

/* Responsive widths for larger screens */
@media (min-width: 768px) {
  .music-item-card {
    width: calc(33.33% - 32px); /* One-third of the screen minus margin */
    margin: 16px; /* Adjust margin for grid spacing */
  }
}
</style>
