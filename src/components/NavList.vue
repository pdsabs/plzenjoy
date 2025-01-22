<script setup>
import WritingIcon from './icons/IconWriting.vue'
import ContactIcon from './icons/IconContact.vue'
import MusicIcon from './icons/IconMusic.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="item-list">
    <div class="item-card override-border">
      <i>
        <MusicIcon />
      </i>
      <div class="details">
        <h3>
          <RouterLink to="/music">Listen</RouterLink>
        </h3>
      </div>
    </div>
    <div class="item-card override-border">
      <i>
        <WritingIcon />
      </i>
      <div class="details">
        <h3>
          <RouterLink to="/writing">Read</RouterLink>
        </h3>
      </div>
    </div>
    <div class="item-card override-border">
      <i>
        <ContactIcon />
      </i>
      <div class="details">
        <h3>
          <a href="https://www.instagram.com/ilovethesun123456789/" target="_blank" rel="noopener"
            >Connect</a
          >
        </h3>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item-card.override-border {
  border-bottom: none;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;
  color: var(--color-icon);
}
</style>
