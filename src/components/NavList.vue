<script setup>
import NavItem from './NavItem.vue'
import WritingIcon from './icons/IconWriting.vue'
import ContactIcon from './icons/IconContact.vue'
import MusicIcon from './icons/IconMusic.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <NavItem>
    <template #icon>
      <MusicIcon />
    </template>
    <template #heading>Music</template>
    <RouterLink to="/music">Listen</RouterLink>
  </NavItem>

  <NavItem>
    <template #icon>
      <WritingIcon />
    </template>
    <template #heading>Writing</template>
    <RouterLink to="/writing">Read</RouterLink>
  </NavItem>

  <NavItem>
    <template #icon>
      <ContactIcon />
    </template>
    <template #heading>About</template>
    <a href="https://www.instagram.com/ilovethesun123456789/" target="_blank" rel="noopener"
      >Connect</a
    >
  </NavItem>
</template>
