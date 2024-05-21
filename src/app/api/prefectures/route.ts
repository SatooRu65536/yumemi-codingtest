import { NextResponse } from 'next/server';
import { fetchPrefectures } from './prefectureFetcher';

export async function GET(): Promise<NextResponse> {
  const prefectures = await fetchPrefectures();

  if (prefectures === undefined) {
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }

  return NextResponse.json({ prefectures }, { status: 200 });
}
