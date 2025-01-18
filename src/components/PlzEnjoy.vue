<template>
  <div class="vertical-center-flex">
    <p class="text-typewriter anim-typewriter">plz enjoy.</p>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const element = document.querySelector('.anim-typewriter')
})
</script>

<style scoped>
.text-typewriter {
  width: 1em;
  margin: 0 auto;
  border-right: 2px solid var(--color-card);
  font-size: 180%;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
}

/* Animation */
.anim-typewriter {
  animation:
    typewriter 5s steps(10) infinite alternate both,
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
    border-right-color: var(--color-card-title);
  }
  to {
    border-right-color: transparent;
  }
}
</style>
