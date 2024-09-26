<script setup lang="ts">
import type { Councillor } from '@/types';
import voteFormCouncillorListItem from '@/components/vote-form/vote-form-councillor-list-item.vue';

defineProps({
  councillors: {
    type: Array<Councillor>,
    required: true,
  },
});
</script>

<template>
  <div>
    <!-- Loop through the councilors -->
    <ul class="list-none">
      <li
        v-for="councillor in councillors"
        :key="councillor.id"
        class="p-2 border-b border-stone-300"
      >
        <vote-form-councillor-list-item :councillor="councillor" />
      </li>
    </ul>
  </div>
</template>
