'use client';

import { useAtomValue } from 'jotai';
import { type ReactElement } from 'react';
import PopulationChart, { type ChartData } from './Chart';
import PopulationTypeSelector from './Select';
import { PrefpopulationsListAtom } from '@/stores/populationAtom';
import { prefsAtom } from '@/stores/prefsAtom';
import { selectedPopulationAtom } from '@/stores/selectedPopulationAtom';

export default function ChartSection(): ReactElement {
  const prefPopulationsList = useAtomValue(PrefpopulationsListAtom);
  const populationType = useAtomValue(selectedPopulationAtom);
  const prefs = useAtomValue(prefsAtom);

  const chartData: ChartData = prefPopulationsList.map((prefPopulations) => {
    const { prefCode } = prefPopulations;
    const prefName = prefs?.find((pref) => pref.prefCode === prefCode)?.prefName;
    const population = prefPopulations.populations.find((p) => p.label === populationType);

    if (prefName === undefined) throw new Error('prefName is not defined');
    if (population === undefined) throw new Error('population is not defined');

    return {
      type: 'line',
      name: prefName,
      data: population.data.map((d) => d.value),
    };
  });

  const years =
    prefPopulationsList
      .at(0)
      ?.populations.at(0)
      ?.data.map((d) => d.year.toString()) ?? [];

  return (
    <>
      <PopulationTypeSelector />
      <PopulationChart data={chartData} populationType={populationType} years={years} />
    </>
  );
}
