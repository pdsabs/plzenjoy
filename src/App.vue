<script setup>
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <Navbar />
  <div class="wrapper">
    <RouterView />
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .wrapper {
    display: flex;
    place-items: center;
    flex-wrap: wrap;
  }
}
</style>
