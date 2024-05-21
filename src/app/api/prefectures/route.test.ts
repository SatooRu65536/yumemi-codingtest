import { GET } from './route';
import { type PrefectureResponse } from '@/types/prefecture';

describe('api /api/prefectures', () => {
  test('全ての都道府県を返すか', async () => {
    const response = await GET();

    // 200 を返している
    expect(response.status).toBe(200);

    const prefecturesResponse: PrefectureResponse = await response.json();
    expect(prefecturesResponse.prefectures.length).toBe(47);
  });
});
