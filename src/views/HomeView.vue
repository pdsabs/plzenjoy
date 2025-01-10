<script setup>
import NavList from '../components/NavList.vue'
import PlzEnjoy from '../components/PlzEnjoy.vue'
import { ref } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'

const showPlzEnjoy = ref(false) // Controls visibility of PlzEnjoy
const nextRoute = ref(null) // Reactive wrapper for the next() function

onBeforeRouteLeave((to, from, next) => {
  showPlzEnjoy.value = true
  nextRoute.value = next
})
</script>

<template>
  <main>
    <PlzEnjoy v-if="showPlzEnjoy" @animation-end="nextRoute" />
    <NavList v-else />
  </main>
</template>
