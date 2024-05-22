import { type NextApiRequest } from 'next';
import { NextResponse } from 'next/server';
import { fetchPopulation } from './populationFetcher';

export async function GET(_req: NextApiRequest, { params }: { params: { prefCode: string } }): Promise<NextResponse> {
  const { prefCode: prefCodeStr } = params;
  const prefCode = parseInt(prefCodeStr ?? '', 10);

  if (Number.isNaN(prefCode)) {
    return NextResponse.json({ message: 'Bad Request' }, { status: 400 });
  }

  const populations = await fetchPopulation(prefCode);

  if (populations === undefined) {
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }

  return NextResponse.json({ populations }, { status: 200 });
}
