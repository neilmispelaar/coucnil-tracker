<script setup lang="ts">
import type { CityOfficial, VoteOptionType } from '@/types';
import voteFormCityOfficialListItemRadioButton from '@/components/vote-form/vote-form-city-official-list-item-radio-button.vue';
import { useVotesStore } from '@/stores/votes';
import { useWardsStore } from '@/stores/wards';
import { VoteOptions } from '@/types';
import { computed, ref, watch } from 'vue';

const props = defineProps({
  cityOfficial: {
    type: Object as () => CityOfficial,
    required: true,
  },
});

const votesStore = useVotesStore();
const wardsStore = useWardsStore();

// Use VoteOptionType for the localVote ref
const localVote = ref<VoteOptionType | null>();

// Create a computed property for the VoteOptions
const voteOptions = computed(() => Object.values(VoteOptions));

const wardName = computed(() => {
  return wardsStore.getWardByCouncilor(props.cityOfficial.id)?.name;
});

// Watch for changes in localVote and update the store
watch(localVote, (newVote) => {
  if (newVote !== undefined) {
    votesStore.updateVote(props.cityOfficial.id, newVote);
  }
});
</script>

<template>
  <fieldset>
    <div class="flex justify-between items-center">
      <p>{{ cityOfficial.name }}</p>
      <p>{{ wardName || 'Loading...' }}</p>

      <div class="flex">
        <vote-form-city-official-list-item-radio-button
          v-for="voteOption in voteOptions"
          :key="voteOption.label"
          v-model="localVote"
          :vote-option
          :city-official
        />
      </div>
    </div>
  </fieldset>
</template>
