import type { Ward } from '@/types';
import type { ParsedContent } from '@nuxt/content';
import type { Feature, GeoJsonProperties, Geometry } from 'geojson';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useWardsStore = defineStore('wards', () => {
  const wards = ref<Ward[]>([]);
  const loading = ref<boolean>(false);
  const error = ref<string | null>(null);

  // Actions
  const fetchWards = async () => {
    loading.value = true;
    error.value = null;

    try {
      const { data } = await useAsyncData('wards', async () => {
        // queryContent('/wards').findOne());
        const [incomingWards, incomingGeoJsonData] = await Promise.all([
          queryContent('/wards').findOne(),
          queryContent('/wards-geo').findOne(),
        ]);

        return { incomingWards, incomingGeoJsonData };
      });

      wards.value = mergeWardData(
        data.value?.incomingWards.body as unknown as Partial<Ward>[],
        data.value?.incomingGeoJsonData.features as unknown as Feature<Geometry, GeoJsonProperties>[],
      );

      // if (data.value && Array.isArray(data.value.body)) {
      //   wards.value = data.value.body as Ward[];
      // }
      // else {
      //   throw new Error('No valid data was returned');
      // }
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

  // Merge together our ward data and the geoJson data
  function mergeWardData(wardsData: Partial<Ward>[] | undefined, geoJsonFeatures: Feature<Geometry, GeoJsonProperties>[] | undefined): Ward[] {
    if (!Array.isArray(wardsData) || !Array.isArray(geoJsonFeatures)) {
      return [];
    }

    // Convert the GeoJSON data to a more usable format
    const geoJsonMap = new Map(
      geoJsonFeatures.map(feature => [feature.properties?.WARD, feature]),
    );

    return wardsData.map((ward: Partial<Ward>) => {
      const geoJsonFeature = geoJsonMap.get(ward.number);

      return {
        ...ward,
        name: geoJsonFeature?.properties!.NAME,
        sector: geoJsonFeature?.properties!.SECTOR_EN,
        globalId: geoJsonFeature?.properties!.GLOBALID,
        createdDate: geoJsonFeature?.properties!.CREATED_DA,
        lastEditedDate: geoJsonFeature?.properties!.LAST_EDITE,
        mapData: geoJsonFeature || null,
      } as Ward;
    });
  }

  // Getters
  function getWardByCouncilor(councillorId: number): Ward | null {
    return wards.value.find(w => w.councillorId === councillorId) || null;
  }

  // This will run when the store is first used
  fetchWards();

  return {
    wards,
    getWardByCouncilor,
  };
});
