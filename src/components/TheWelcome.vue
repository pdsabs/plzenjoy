<script setup>
import WelcomeItem from './WelcomeItem.vue'
import WritingIcon from './icons/IconWriting.vue'
import ContactIcon from './icons/IconContact.vue'
import MusicIcon from './icons/IconMusic.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <MusicIcon />
    </template>
    <template #heading>Music</template>

    <a
      href="https://open.spotify.com/artist/2pwBng2g7Z23jZrsleMcpW?si=zakbnhBeTZanKb4Cu6Ibww"
      target="_blank"
      rel="noopener"
      >Listen</a
    >
    to my thoughts.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <WritingIcon />
    </template>
    <template #heading>Text</template>

    <RouterLink to="/writing">Read</RouterLink>
    my thoughts.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ContactIcon />
    </template>
    <template #heading>Contact Me</template>

    <a href="https://www.instagram.com/ilovethesun123456789/" target="_blank" rel="noopener"
      >Connect</a
    >
    with me.
  </WelcomeItem>
</template>
