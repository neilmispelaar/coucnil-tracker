<script setup lang="ts">
import type { Feature, GeoJsonProperties, Geometry } from 'geojson';
import { useVotesStore } from '@/stores/votes';
import { useWardsStore } from '@/stores/wards';
import { VoteOptions } from '@/types';
import { LGeoJson, LMap, LTileLayer } from '@vue-leaflet/vue-leaflet';

import { computed, ref } from 'vue';
import 'leaflet/dist/leaflet.css';

const map = ref(null);
const zoom = ref(10);

const votesStore = useVotesStore();
const wardsStore = useWardsStore();

const COLOURS = {
  DEFAULT: '#ff0000',
  YES: '#00ff00',
  NO: '#0000ff',
  ABSTAIN: '#ffff00',
} as const;

const geoJsonWardsData = computed(() => {
  return wardsStore.wards.map((ward) => {
    return {
      ...ward.mapData,
      properties: {
        ...ward.mapData.properties,
        VOTE: votesStore.getVoteByWardNumber(ward.number),
      },
    };
  });
});

const geoJsonWardOptions = computed(() => {
  return (feature: Feature<Geometry, GeoJsonProperties> | undefined) => {
    if (!feature) {
      return { color: COLOURS.DEFAULT };
    }
    return { color: getWardColour(feature) };
  };
});

function getWardColour(feature: Feature<Geometry, GeoJsonProperties>) {
  const wardNumber = feature.properties?.WARD;

  if (!wardNumber) {
    return COLOURS.DEFAULT;
  }

  // Find out the vote for the ward based on the councillor's vote in the store

  const vote = votesStore.getVoteByWardNumber(wardNumber);
  switch (vote) {
    case VoteOptions.YES.value:
      return COLOURS.YES;
    case VoteOptions.NO.value:
      return COLOURS.NO;
    case VoteOptions.ABSTAIN.value:
      return COLOURS.ABSTAIN;
    default:
      return COLOURS.DEFAULT;
  }
}
</script>

<template>
  <div class="vote-map">
    <div class="map-container">
      <div class="w-full h-96">
        <l-map
          ref="map"
          v-model:zoom="zoom"
          :center="[45.424721, -75.695000]"
          :use-global-leaflet="false"
        >
          <l-tile-layer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            layer-type="base"
            name="OpenStreetMap"
          />

          <l-geo-json
            :geojson="geoJsonWardsData"
            :options-style="geoJsonWardOptions"
          />
        </l-map>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
