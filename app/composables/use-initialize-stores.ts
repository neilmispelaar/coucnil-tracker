import { useCouncillorsStore } from '@/stores/councillors';
import { useWardsStore } from '@/stores/wards';

export function useInitializeStores() {
  const initializeStores = async () => {
    const nuxtApp = useNuxtApp();

    const councillorsStore = useCouncillorsStore();
    const wardsStore = useWardsStore();

    councillorsStore.fetchCouncillors();
    wardsStore.fetchWards();

    // This is avoid the nuxt context error
    // https://github.com/nuxt/nuxt/issues/25099#issuecomment-1881116359
    await nuxtApp.runWithContext(() => useAsyncData('councillorStore', () => councillorsStore.fetchCouncillors().then(() => true)));
    await nuxtApp.runWithContext(() => useAsyncData('wardsStore', () => wardsStore.fetchWards().then(() => true)));
  };

  return {
    initializeStores,
  };
}
