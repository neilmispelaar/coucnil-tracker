<script setup lang="ts">
import VoteForm from '@/components/vote-form/vote-form.vue';
import VoteMap from '@/components/vote-map/vote-map.vue';
import { useCouncillorsStore } from '@/stores/councillors';
import { useVotesStore } from '@/stores/votes';
import { useWardsStore } from '@/stores/wards';

// const councillorsStore = useCouncillorsStore();

const wardsStore = useWardsStore();

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
        <h2 class="text-xl">
          Card title
        </h2>

        <ul>
          <li
            v-for="vote in votesStore.votes"
            :key="vote.councillorId"
          >
            {{ vote.councillorId }}: {{ vote.vote }}
          </li>
        </ul>
      </u-card>

      <ul>
        <li
          v-for="ward in wardsStore.wards"
          :key="ward.id"
        >
          {{ ward.name }}: {{ ward.number }}
        </li>
      </ul>
    </div>
  </div>
</template>
