import { type Population } from '@/types/population';

interface RESASPopulationResponse {
  message: null;
  result: {
    boundaryYear: number;
    data: Population[];
  };
}

export async function fetchPopulation(prefCode: number): Promise<Population[] | undefined> {
  const API_URL = process.env.RESAS_URL;
  const API_KEY = process.env.RESAS_API_KEY;

  if (API_URL === undefined) throw new Error('RESAS_URL is not defined');
  if (API_KEY === undefined) throw new Error('RESAS_API_KEY is not defined');

  const url = new URL('/api/v1/population/composition/perYear', API_URL);
  url.searchParams.set('prefCode', prefCode.toString());
  url.searchParams.set('cityCode', '-');

  const requestInit: RequestInit = {
    headers: { 'X-API-KEY': API_KEY },
  };

  const populations = await fetch(url.toString(), requestInit)
    .then(async (res) => {
      if (!res.ok) throw new Error(`HTTP status code: ${res.status}`);
      return await res.json();
    })
    .then((prefectureResponse) => {
      const response: RESASPopulationResponse = prefectureResponse;
      return response.result.data;
    })
    .catch((error) => {
      console.error(error);
      return undefined;
    });

  return populations;
}
