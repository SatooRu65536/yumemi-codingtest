import { test, expect } from '@playwright/test';

test('初期表示の確認', async ({ page }) => {
  await page.goto('/');

  // ページタイトルが正しいことを確認
  await expect(page).toHaveTitle('都道府県別人口推移比較');

  // "都道府県一覧" が表示されていることを確認
  const heading = page.getByRole('heading', { name: '都道府県一覧' });
  await expect(heading).toBeVisible();

  // "総人口推移" が表示されていることを確認
  const heading2 = page.getByRole('heading', { name: '総人口推移' });
  await expect(heading2).toBeVisible();

  // select 要素が表示されていることを確認
  const select = page.getByRole('combobox');
  await expect(select).toBeVisible();

  // "都道府県を選択してください" が表示されていることを確認
  const message = page.getByText('都道府県を選択してください');
  await expect(message).toBeVisible();
});

test('都道府県のチェックボックスが存在するか', async ({ page }) => {
  await page.goto('/');

  // チェックボックスが 47 個存在することを確認
  const checkboxes = await page.$$('input[type="checkbox"]');
  expect(checkboxes.length).toBe(47);
});

test('都道府県を選択するとグラフが表示されるか', async ({ page }) => {
  await page.goto('/');

  // グラフを取得
  const graph = page.locator('svg.highcharts-root');
  // グラフの凡例を取得
  const legend = graph.locator('.highcharts-legend');

  // チェックボックスを取得
  const checkbox = page.getByRole('checkbox', { name: '愛知県' });

  // 凡例に都道府県名が含まれていないことを確認
  await expect(legend).not.toContainText('愛知県');

  // チェックボックスをクリック
  await checkbox.click();

  // 凡例に都道府県名が含まれていることを確認
  await expect(legend).toContainText('愛知県');
});

test('人口種別を変更するとグラフが更新されるか', async ({ page }, testInfo) => {
  await page.goto('/');

  // チェックボックスをクリック
  await page.getByRole('checkbox', { name: '東京都' }).click();
  await page.getByRole('checkbox', { name: '愛知県' }).click();

  const select = page.locator('select');

  // 総人口グラフのスクリーンショットを撮影
  await page.screenshot({ path: `${testInfo.snapshotPath('result.png')}`, fullPage: true, animations: 'disabled' });

  // 人口種別を "年少人口" に変更
  await select.selectOption({ label: '年少人口' });

  // グラフタイトルが "年少人口推移" に変更されていることを確認
  const graphTitle = page.getByRole('heading', { name: '年少人口推移' });
  await expect(graphTitle).toBeVisible();

  // 総人口グラフのスクリーンショットを比較
  expect(await page.screenshot({ fullPage: true, animations: 'disabled' })).not.toMatchSnapshot({ name: 'result.png' });
});
