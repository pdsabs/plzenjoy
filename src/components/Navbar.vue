<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = (event) => {
  if (!event.target.closest('.navbar')) {
    isMenuOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeMenu)
})

onUnmounted(() => {
  document.removeEventListener('click', closeMenu)
})
</script>

<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <router-link to="/">plz enjoy</router-link>
    </div>
    <button class="hamburger" :class="{ open: isMenuOpen }" @click="toggleMenu">
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </button>
    <ul class="navbar-menu" :class="{ active: isMenuOpen }">
      <li><router-link to="/music">Music</router-link></li>
      <li><router-link to="/writing">Writing</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: var(--color-background);
  color: var(--color-text);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 4px 6px var(--color-shadow);
  z-index: 1000;
}

.navbar-brand a {
  color: var(--color-text);
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: normal;
}

.navbar-menu {
  list-style: none;
  display: flex;
  gap: 50px;
  margin: 0;
  padding: 0;
}

.navbar-menu li a {
  color: var(--color-text);
  text-decoration: none;
}

.navbar-menu li button {
  background: none;
  border: none;
  color: var(--color-text);
  cursor: pointer;
}

.navbar-menu.active {
  display: flex;
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1100;
}

.hamburger .line {
  width: 25px;
  height: 3px;
  background-color: var(--color-text);
  transition: all 0.3s ease;
}

.hamburger.open .line:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.hamburger.open .line:nth-child(2) {
  opacity: 0;
}

.hamburger.open .line:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* Responsive Design */
@media (max-width: 768px) {
  .navbar {
    padding: 0 10px;
  }

  .navbar-menu {
    display: none;
    flex-direction: column;
    align-items: end;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: var(--color-background);
    box-shadow: 0 4px 6px var(--color-shadow);
    padding: 10px 30px;
  }

  .navbar-menu.active {
    display: flex;
  }

  .hamburger {
    display: flex;
    position: absolute;
    right: 20px;
  }
}
</style>
