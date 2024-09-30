<script setup lang="ts">
import { useCouncillorsStore } from '@/stores/councillors';
import { useWardsStore } from '@/stores/wards';

// Default to ligth mode
const colorMode = useColorMode();
colorMode.preference = 'light';

// Initialize the pinia stores
const councillorsStore = useCouncillorsStore();
const wardsStore = useWardsStore();

councillorsStore.fetchCouncillors();
wardsStore.fetchWards();

// https://pinia.vuejs.org/ssr/nuxt.html#Awaiting-for-actions-in-pages
useAsyncData('councillorStore', () => councillorsStore.fetchCouncillors().then(() => true));
useAsyncData('wardsStore', () => wardsStore.fetchWards().then(() => true));
</script>

<template>
  <nuxt-route-announcer />
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>
