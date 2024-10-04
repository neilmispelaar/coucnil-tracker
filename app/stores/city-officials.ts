import type { CityOfficial } from '@/types';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useCityOfficialsStore = defineStore('city-officials', () => {
  const cityOfficials = ref<CityOfficial[]>([]);
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);

  // actions
  const fetchCityOfficials = async () => {
    loading.value = true;

    try {
      const { data } = await useAsyncData('city-officials', () => queryContent('/city-officials').findOne());

      if (data.value && Array.isArray(data.value.body)) {
        cityOfficials.value = data.value.body as CityOfficial[];
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
  // fetchCouncillors();

  return {
    cityOfficials,
    fetchCityOfficials,
  };
});
