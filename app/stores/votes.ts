import type { VoteOptionType, VoteRecord } from '@/types';
import { VoteOptions } from '@/types';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useVotesStore = defineStore('votes', () => {
  const votes = ref<VoteRecord[]>([]);

  function updateVote(councillorId: number, vote: VoteOptionType | null) {
    const index = votes.value.findIndex(v => v.councillorId === councillorId);

    if (index !== -1) {
      if (votes.value[index]) {
        votes.value[index].vote = vote;
      }
    }
    else {
      votes.value.push({ councillorId, vote });
    }
  }

  function getVoteByCouncillor(councillorId: number) {
    return votes.value.find(v => v.councillorId === councillorId)?.vote || null;
  }

  return {
    votes,
    updateVote,
    getVoteByCouncillor,
  };
});
