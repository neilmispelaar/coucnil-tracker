<script setup lang="ts">
import type { Councillor, VoteOptionType } from '@/types';
import voteFormCouncillorListItemRadioButton from '@/components/vote-form/vote-form-councillor-list-item-radio-button.vue';
import { useVotesStore } from '@/stores/votes';
import { useWardsStore } from '@/stores/wards';
import { VoteOptions } from '@/types';
import { computed, ref, watch } from 'vue';

const props = defineProps({
  councillor: {
    type: Object as () => Councillor,
    required: true,
  },
});

const votesStore = useVotesStore();
const wardsStore = useWardsStore();

// Use VoteOptionType for the localVote ref
const localVote = ref<VoteOptionType | undefined>(undefined);

// Create a computed property for the VoteOptions
const voteOptions = computed(() => Object.values(VoteOptions));

const wardName = computed(() => {
  return wardsStore.getWardByCouncilor(props.councillor.id)?.name || 'Ward information not found';
});

// Watch for changes in localVote and update the store
watch(localVote, (newVote) => {
  if (newVote !== undefined) {
    votesStore.updateVote(props.councillor.id, newVote);
  }
});
</script>

<template>
  <fieldset>
    <div class="flex justify-between items-center">
      <div>
        <label>
          <p class="font-semibold">{{ councillor.name }}</p>
          <p class="text-sm text-gray-700">
            {{ wardName }}
          </p>
        </label>
      </div>

      <div class="flex">
        <vote-form-councillor-list-item-radio-button
          v-for="voteOption in voteOptions"
          :key="voteOption.label"
          :vote-option
          :group-id="councillor.name"
        />
      </div>
    </div>
  </fieldset>
</template>
