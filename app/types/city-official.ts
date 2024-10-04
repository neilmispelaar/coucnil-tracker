// Const assertions for elected office types
// eslint-disable-next-line unused-imports/no-unused-vars
const ELECTED_OFFICE = {
  COUNCILLOR: 'Councillor',
  MAYOR: 'Mayor',
} as const;

// Derive a union type from the const object
type ElectedOffice = typeof ELECTED_OFFICE[keyof typeof ELECTED_OFFICE];

interface BaseOfficialData {
  id: number
  name: string
  district_name: string
  elected_office: ElectedOffice
  source_url: string
  first_name: string
  last_name: string
  party_name: string
  email: string
  url: string
  personal_url: string
  photo_url: string
  offices: Array<{
    fax: string
    tel: string
    type: string
    postal: string
  }>
  representative_set_name: string
}

type Councillor = BaseOfficialData & {
  elected_office: 'Councillor'
};

type Mayor = BaseOfficialData & {
  elected_office: 'Mayor'
};

type CityOfficial = Councillor | Mayor;

export type { CityOfficial, Councillor, Mayor };
