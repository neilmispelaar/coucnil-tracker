<script setup lang="ts">
import VoteFormCityOffficialList from '@/components/vote-form/vote-form-city-official-list.vue';
import { useCityOfficialsStore } from '~/stores/city-officials';

const cityOfficialsStore = useCityOfficialsStore();
</script>

<template>
  <u-container>
    <u-card class="my-10">
      <div>
        <form @submit.prevent>
          <vote-form-city-offficial-list :city-officials="cityOfficialsStore.cityOfficials" />
        </form>
      </div>
    </u-card>
  </u-container>
</template>
