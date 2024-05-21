import { type Prefecture } from '@/types/prefecture';

interface RESASPrefectureResponse {
  message: null;
  result: Prefecture[];
}

export async function fetchPrefectures(): Promise<Prefecture[] | undefined> {
  const API_URL = process.env.RESAS_URL;
  const API_KEY = process.env.RESAS_API_KEY;

  if (API_URL === undefined) throw new Error('RESAS_URL is not defined');
  if (API_KEY === undefined) throw new Error('RESAS_API_KEY is not defined');

  const url = new URL('/api/v1/prefectures', API_URL);
  const requestInit: RequestInit = {
    headers: { 'X-API-KEY': API_KEY },
  };

  const prefectures = await fetch(url.toString(), requestInit)
    .then(async (res) => {
      if (!res.ok) throw new Error(`HTTP status code: ${res.status}`);
      return await res.json();
    })
    .then((prefectureResponse) => {
      const response: RESASPrefectureResponse = prefectureResponse;
      return response.result;
    })
    .catch((error) => {
      console.error(error);
      return undefined;
    });

  return prefectures;
}
