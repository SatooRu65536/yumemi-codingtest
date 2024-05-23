import { type POPULATION_TYPES } from '@/consts/populations';

export interface YearPopulation {
  year: number;
  value: number;
}

export type PopulationType = (typeof POPULATION_TYPES)[number];

export interface Population {
  label: PopulationType;
  data: YearPopulation[];
}

export interface PrefPopulations {
  populations: Population[];
  prefCode: number;
}
