'use client';

import { useAtomValue } from 'jotai';
import { type ReactElement } from 'react';
import { PrefpopulationsListAtom } from '@/stores/populationAtom';

export default function PopulationChart(): ReactElement {
  const prefPopulationsList = useAtomValue(PrefpopulationsListAtom);

  return (
    <div>
      {prefPopulationsList.map((prefPopulations) => (
        <div key={prefPopulations.prefCode}>
          {prefPopulations.prefCode}:{prefPopulations.populations[0].label}
        </div>
      ))}
    </div>
  );
}
