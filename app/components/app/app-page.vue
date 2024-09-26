<script setup>
import AppFooter from '@/components/app/app-footer.vue';
import AppHeader from '@/components/app/app-header.vue';
</script>

<template>
  <app-header />

  <main>
    <slot />
  </main>

  <app-footer />
</template>

<style>
body {
  @apply bg-neutral-100;
}
</style>
