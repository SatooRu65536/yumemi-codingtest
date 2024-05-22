import { type NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { fetchPopulation } from './populationFetcher';

export async function GET(_req: NextRequest, { params }: { params: { prefCode: string } }): Promise<NextResponse> {
  const { prefCode: prefCodeStr } = params;
  const prefCode = parseInt(prefCodeStr ?? '', 10);

  if (Number.isNaN(prefCode)) {
    return NextResponse.json({ message: 'Bad Request. Please specify a number.' }, { status: 400 });
  }

  const populations = await fetchPopulation(prefCode);

  if (populations === undefined) {
    return NextResponse.json({ message: 'Bad Request. Please specify prefCode.' }, { status: 400 });
  }

  return NextResponse.json({ populations }, { status: 200 });
}
