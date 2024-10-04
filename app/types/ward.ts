import type { Feature, Geometry } from 'geojson';

interface Ward {
  // Unique identifier and basic info
  id: number
  number: string
  name: string
  population: number
  areaSqkm: number

  // Additional information
  councillorId: number

  // Financial information
  propertyTaxes: {
    assessedValue: number
    revenueCollected: number
    share: number
  }

  // This information comes from the geojson file
  sector: string

  // Metadata
  globalId: string
  createdDate: string
  lastEditedDate: string

  // Calculated property
  populationDensity: number

  // Encapsulated GeoJSON data for mapping
  mapData: Feature<Geometry>
}

export type { Ward };
