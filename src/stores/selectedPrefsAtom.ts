import { atomWithStorage } from 'jotai/utils';

export const selectedPrefsAtom = atomWithStorage<number[]>('selectedPrefs', []);
