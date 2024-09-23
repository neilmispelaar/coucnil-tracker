import type { Councillor } from '@/types';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCouncillorsStore = defineStore('councillors', () => {
  const councillors = ref<Councillor[]>([]);
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);

  // actions
  const fetchCouncillors = async () => {
    loading.value = true;

    try {
      const { data } = await useAsyncData('councillors', () => queryContent('/councillors').findOne());

      if (data.value && Array.isArray(data.value.body)) {
        councillors.value = data.value.body as Councillor[];
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
  fetchCouncillors();

  return {
    councillors,
  };
});
