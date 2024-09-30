<script setup lang="ts">
import VoteForm from '@/components/vote-form/vote-form.vue';
import VoteMap from '@/components/vote-map/vote-map.vue';
import { useCouncillorsStore } from '@/stores/councillors';
import { useVotesStore } from '@/stores/votes';
import { useWardsStore } from '@/stores/wards';

// const councillorsStore = useCouncillorsStore();
const votesStore = useVotesStore();
</script>

<template>
  <div>
    <vote-form />
    <client-only>
      <vote-map />
    </client-only>

    <div
      class="p-10"
    >
      <h1 class="text-2xl mb-5">
        Hello world!
      </h1>

      <u-card>
        <ul>
          <li
            v-for="vote in votesStore.votes"
            :key="vote.councillorId"
          >
            {{ vote.councillorId }}: {{ vote.vote }}
          </li>
        </ul>
      </u-card>
    </div>
  </div>
</template>
