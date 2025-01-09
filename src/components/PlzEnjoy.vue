<template>
  <div class="about">
    <p class="line-1 anim-typewriter">Plz enjoy.</p>
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

.line-1 {
  top: 50%;
  width: 1em;
  margin: 0 auto;
  border-right: 2px solid rgba(255, 255, 255, 0.75);
  font-size: 180%;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  transform: translateY(-50%);
}

/* Animation */
.anim-typewriter {
  animation:
    typewriter 2.5s steps(10) 1s 1 normal both,
    blinkTextCursor 500ms steps(5) infinite normal;
}
@keyframes typewriter {
  from {
    width: 0;
  }
  to {
    width: 6em;
  }
}
@keyframes blinkTextCursor {
  from {
    border-right-color: rgba(255, 255, 255, 0.75);
  }
  to {
    border-right-color: transparent;
  }
}
</style>
<script setup></script>
