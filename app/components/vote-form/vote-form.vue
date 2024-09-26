<script setup lang="ts">
import VoteFormCouncillorList from '@/components/vote-form/vote-form-councillor-list.vue';
import { useCouncillorsStore } from '@/stores/councillors';
import { ref } from 'vue';

const councillorsStore = useCouncillorsStore();
</script>

<template>
  <u-container>
    <u-card class="my-10">
      <div>
        <form @submit.prevent>
          <vote-form-councillor-list :councillors="councillorsStore.councillors" />
        </form>
      </div>
    </u-card>
  </u-container>
</template>
