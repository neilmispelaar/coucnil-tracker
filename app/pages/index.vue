<script setup lang="ts">
import VoteForm from '@/components/vote-form/vote-form.vue';
import VoteMap from '@/components/vote-map/vote-map.vue';
</script>

<template>
  <vote-form />
  <client-only>
    <vote-map />
  </client-only>
</template>
