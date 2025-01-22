<script setup>
import NavItem from './NavItem.vue'
import WritingIcon from './icons/IconWriting.vue'
import ContactIcon from './icons/IconContact.vue'
import MusicIcon from './icons/IconMusic.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="item-list">
    <NavItem>
      <template #icon>
        <MusicIcon />
      </template>
      <template #heading>
        <RouterLink to="/music">Listen</RouterLink>
      </template>
    </NavItem>

    <NavItem>
      <template #icon>
        <WritingIcon />
      </template>
      <template #heading>
        <RouterLink to="/writing">Read</RouterLink>
      </template>
    </NavItem>

    <NavItem>
      <template #icon>
        <ContactIcon />
      </template>
      <template #heading>
        <a href="https://www.instagram.com/ilovethesun123456789/" target="_blank" rel="noopener"
          >Connect</a
        >
      </template>
    </NavItem>
  </div>
</template>
