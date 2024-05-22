export interface YearPopulation {
  year: number;
  value: number;
}

export type PopulationType = '総人口' | '年少人口' | '生産年齢人口' | '老年人口';

export interface Population {
  label: PopulationType;
  data: YearPopulation[];
}
