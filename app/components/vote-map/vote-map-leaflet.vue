<script setup lang="ts">
import { LGeoJson, LMap, LTileLayer } from '@vue-leaflet/vue-leaflet';
import { ref } from 'vue';
import 'leaflet/dist/leaflet.css';

const map = ref(null);
const zoom = ref(10);

const _geojsonData = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-0.13, 52.5],
            [-0.13, 51.51],
            [-0.12, 51.51],
            [-0.12, 51.5],
            [-0.13, 51.5],
          ],
        ],
      },
    },
  ],
};

const geojsonOptions = {
  style: {
    fillColor: '#41B883',
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '3',
    fillOpacity: 0.7,
  },
};
</script>

<template>
  <div class="vote-map">
    <div class="map-container">
      <div style="height:600px; width:800px">
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
            :options="geojsonOptions"
          />
        </l-map>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
