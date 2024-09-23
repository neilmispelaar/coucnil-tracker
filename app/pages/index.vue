<script setup lang="ts">
import { useCouncillorsStore } from '@/stores/councillors';

const councillorsStore = useCouncillorsStore();

const wardsStore = useWardsStore();
</script>

<template>
  <div>
    <div class="bg-gray-800 text-white p-4">
      <h1 class="text-2xl">
        Hello world!
      </h1>
      <u-button>Button</u-button>
      <div v-if="councillorsStore.councillors">
        <p>{{ councillorsStore.councillors }}</p>
      </div>

      <div v-if="wardsStore.wards">
        <p>{{ wardsStore.wards }}</p>
      </div>
    </div>
  </div>
</template>
