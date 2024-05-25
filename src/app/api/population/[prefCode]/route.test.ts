import { type NextRequest } from 'next/server';
import { GET } from './route';
import { POPULATION_TYPES } from '@/consts/populations';
import { type PrefPopulations } from '@/types/population';

describe('api /api/prefectures', () => {
  test('全てのタイプを返すか', async () => {
    const partialReq: Partial<NextRequest> = {};
    const mockReq = partialReq as NextRequest;
    const params = {
      prefCode: '1',
    };

    const response = await GET(mockReq, { params });

    expect(response.status).toBe(200);

    const prefecturesResponse: PrefPopulations = await response.json();

    // 全てのタイプが含まれている
    const populationTypes = prefecturesResponse.populations.map((population) => population.label);
    expect(populationTypes).toEqual(POPULATION_TYPES);
  });

  test('prefCode が範囲外の時 400 を返すか', async () => {
    const partialReq: Partial<NextRequest> = {};
    const mockReq = partialReq as NextRequest;
    const params = {
      prefCode: '65536',
    };

    const response = await GET(mockReq, { params });

    expect(response.status).toBe(400);
  });

  test('prefCode が数字でない場合 400 を返すか', async () => {
    const partialReq: Partial<NextRequest> = {};
    const mockReq = partialReq as NextRequest;
    const params = {
      prefCode: 'a',
    };

    const response = await GET(mockReq, { params });

    expect(response.status).toBe(400);
  });
});
