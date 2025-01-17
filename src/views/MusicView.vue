<template>
  <div class="center-center-flex">
    <MusicList />
  </div>
</template>

<script setup>
import MusicList from '@/components/MusicList.vue'
</script>

<style>
.center-center-flex {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
