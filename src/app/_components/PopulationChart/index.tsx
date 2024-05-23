'use client';

import { useAtomValue } from 'jotai';
import { type ReactElement } from 'react';
import { selectedPrefsAtom } from '@/stores/selectedPrefsAtom';

export default function PopulationChart(): ReactElement {
  const selectedPrefs = useAtomValue(selectedPrefsAtom);

  return (
    <div>
      {selectedPrefs.map((prefCode) => (
        <div key={prefCode}>{prefCode}</div>
      ))}
    </div>
  );
}
