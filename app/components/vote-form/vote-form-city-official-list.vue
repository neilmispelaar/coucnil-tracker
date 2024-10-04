<script setup lang="ts">
import type { CityOfficial } from '@/types';
import voteFormCityOfficialListItem from '~/components/vote-form/vote-form-city-official-list-item.vue';

defineProps({
  cityOfficials: {
    type: Array<CityOfficial>,
    required: true,
  },
});
</script>

<template>
  <div>
    <!-- Loop through the councilors -->
    <ul class="list-none">
      <li
        v-for="cityOfficial in cityOfficials"
        :key="cityOfficial.id"
        class="p-2 border-b border-stone-300"
      >
        <vote-form-city-official-list-item :city-official />
      </li>
    </ul>
  </div>
</template>
