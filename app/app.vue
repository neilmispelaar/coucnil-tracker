<script setup lang="ts">
import { useCityOfficialsStore } from '@/stores/city-officials';
import { useWardsStore } from '@/stores/wards';

// Default to ligth mode
const colorMode = useColorMode();
colorMode.preference = 'light';

// Initialize the pinia stores
const cityOfficialsStore = useCityOfficialsStore();
const wardsStore = useWardsStore();

// https://pinia.vuejs.org/ssr/nuxt.html#Awaiting-for-actions-in-pages
useAsyncData('cityOfficialsStore', () => cityOfficialsStore.fetchCityOfficials().then(() => true));
useAsyncData('wardsStore', () => wardsStore.fetchWards().then(() => true));
</script>

<template>
  <nuxt-route-announcer />
  <nuxt-layout>
    <nuxt-page />
  </nuxt-layout>
</template>
