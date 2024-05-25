import { atom } from 'jotai';
import { atomFamily } from 'jotai/utils';
import { selectedPrefsAtom } from './selectedPrefsAtom';
import { type PrefPopulations } from '@/types/population';

async function populationFetch(prefCode: number): Promise<PrefPopulations | undefined> {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  if (API_URL === undefined) throw new Error('NEXT_PUBLIC_API_URL is not defined');

  const url = new URL(`/api/population/${prefCode}`, API_URL);
  const prefectures = await fetch(url.toString())
    .then(async (res) => {
      if (!res.ok) throw new Error(`HTTP status code: ${res.status}`);
      return await res.json();
    })
    .then((prefectureResponse) => {
      const response: PrefPopulations = prefectureResponse;
      return response;
    })
    .catch((error) => {
      console.error(error);
      return undefined;
    });

  return prefectures;
}

const prefPopulationAtomFamily = atomFamily((prefCode: number) => atom(async () => await populationFetch(prefCode)));

export const PrefpopulationsListAtom = atom(async (get) => {
  const selectedPrefs = get(selectedPrefsAtom);
  const prefPopulationsPromise = selectedPrefs.map(async (prefCode) => await get(prefPopulationAtomFamily(prefCode)));
  const prefPopulationsList = await Promise.all(prefPopulationsPromise);

  return prefPopulationsList.filter(
    (prefPopulations): prefPopulations is PrefPopulations => prefPopulations !== undefined,
  );
});
