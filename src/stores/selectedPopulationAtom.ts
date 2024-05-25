import { atomWithStorage } from 'jotai/utils';
import { type PopulationType } from '@/types/population';

export const selectedPopulationAtom = atomWithStorage<PopulationType>('populationType', '総人口');
