import { atom } from 'jotai';
import { type Prefecture, type PrefectureResponse } from '@/types/prefecture';

async function prefsFetch(): Promise<Prefecture[] | undefined> {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  if (API_URL === undefined) throw new Error('NEXT_PUBLIC_API_URL is not defined');

  const url = new URL('/api/prefectures', API_URL);
  const prefectures = await fetch(url.toString())
    .then(async (res) => {
      if (!res.ok) throw new Error(`HTTP status code: ${res.status}`);
      return await res.json();
    })
    .then((prefectureResponse) => {
      const response: PrefectureResponse = prefectureResponse;
      return response.prefectures;
    })
    .catch((error) => {
      console.error(error);
      return undefined;
    });

  return prefectures;
}

export const prefsAtom = atom(async () => await prefsFetch());
