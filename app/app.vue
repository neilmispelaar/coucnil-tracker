<script setup lang="ts">
// Default to ligth mode
const colorMode = useColorMode();
colorMode.preference = 'light';
</script>

<template>
  <nuxt-route-announcer />
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>
