import { atom } from 'jotai';
import { type PopulationType } from '@/types/population';

export const selectedPopulationAtom = atom<PopulationType>('総人口');
