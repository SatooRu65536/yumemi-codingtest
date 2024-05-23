import { atom } from 'jotai';
import { atomFamily } from 'jotai/utils';
import { type PopulationResponse, type Population } from '@/types/population';

async function populationFetch(prefCode: number): Promise<Population[] | undefined> {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  if (API_URL === undefined) throw new Error('NEXT_PUBLIC_API_URL is not defined');

  const url = new URL(`/api/population/${prefCode}`, API_URL);
  const prefectures = await fetch(url.toString())
    .then(async (res) => {
      if (!res.ok) throw new Error(`HTTP status code: ${res.status}`);
      return await res.json();
    })
    .then((prefectureResponse) => {
      const response: PopulationResponse = prefectureResponse;
      return response.populations;
    })
    .catch((error) => {
      console.error(error);
      return undefined;
    });

  return prefectures;
}

const populationsAtom = atom<Population[]>([]);

export const populationFamilyAtom = atomFamily((prefCode: number) =>
  atom(async (get, _set) => {
    const populations = get(populationsAtom);
    const population = await populationFetch(prefCode);

    if (population === undefined) return populations;

    return [...populations, population];
  }),
);
