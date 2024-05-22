'use client';

import { useAtomValue } from 'jotai';
import { type ReactElement } from 'react';
import PrefsList from './List';
import useSelectedPrefs from '@/hooks/useSelectedPrefs';
import { prefsAtom } from '@/stores/prefsAtom';

export default function PrefsSection(): ReactElement {
  const prefs = useAtomValue(prefsAtom);
  const [selectedPrefCodes, changeSelectedState] = useSelectedPrefs();

  return <PrefsList changeSelectedState={changeSelectedState} prefs={prefs} selectedPrefCodes={selectedPrefCodes} />;
}
