<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const element = document.querySelector('.anim-typewriter')
})
</script>

<template>
  <div class="center-center-flex">
    <p class="text-typewriter anim-typewriter">plz enjoy.</p>
  </div>
</template>

<style scoped>
.text-typewriter {
  top: 50%;
  width: 1em;
  margin: 0 auto;
  border-right: 2px solid var(--color-background);
  font-size: 180%;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  transform: translateY(-50%);
}

/* Animation */
.anim-typewriter {
  animation:
    typewriter 3s steps(10) infinite both,
    blinkTextCursor 500ms steps(5) infinite normal;
}

@keyframes typewriter {
  0% {
    width: 0;
  }
  50% {
    width: 6em;
  }
  100% {
    width: 0;
  }
}

@keyframes blinkTextCursor {
  from {
    border-right-color: var(--color-text);
  }
  to {
    border-right-color: transparent;
  }
}
</style>
