'use client';

import { useAtomValue } from 'jotai';
import { type ReactElement } from 'react';
import PrefsList from './list';
import { prefsAtom } from '@/stores/prefsAtom';

export default function PrefsSection(): ReactElement {
  const prefs = useAtomValue(prefsAtom);

  return <PrefsList prefs={prefs} />;
}
