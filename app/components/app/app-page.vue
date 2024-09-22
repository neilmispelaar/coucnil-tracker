<script setup>
import AppFooter from '@/components/app/app-footer.vue';
import AppHeader from '@/components/app/app-header.vue';
</script>

<template>
  <u-container>
    <app-header />

    <main class=" bg-slate-100">
      <slot />
    </main>

    <app-footer />
  </u-container>
</template>

<style>
body {
  @apply bg-gray-500;
}
</style>
