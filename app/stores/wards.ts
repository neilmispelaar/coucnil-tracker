import type { Ward } from '@/types';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useWardsStore = defineStore('wards', () => {
  const wards = ref<Ward[]>([]);
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);

  // actions
  const fetchWards = async () => {
    loading.value = true;

    try {
      const { data } = await useAsyncData('wards', () => queryContent('/wards').findOne());

      if (data.value && Array.isArray(data.value.body)) {
        wards.value = data.value.body as Ward[];
      }
      else {
        throw new Error('No valid data was returned');
      }
    }
    catch (e: unknown) {
      if (e instanceof Error) {
        error.value = e.message;
      }
      else {
        error.value = 'An unknown error occurred';
      }

      console.error(error.value);
    }
    finally {
      loading.value = false;
    }
  };

  // This will run when the store is first used
  fetchWards();

  return {
    wards,
  };
});
