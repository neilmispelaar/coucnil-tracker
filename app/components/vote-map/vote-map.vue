<script setup lang="ts">
import voteMapLeaflet from '@/components/vote-map/vote-map-leaflet.vue';
import voteMapOptions from '@/components/vote-map/vote-map-options.vue';
</script>

<template>
  <u-container>
    <u-card>
      <h2 class="text-xl">
        Card title
      </h2>

      <vote-map-options />

      <vote-map-leaflet />
    </u-card>
  </u-container>
</template>

<style scoped>
</style>
