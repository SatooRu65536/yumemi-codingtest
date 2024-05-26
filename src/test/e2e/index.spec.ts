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

  // グラフの凡例を取得
  const legend = page.locator('svg.highcharts-root .highcharts-legend');

  // 凡例に都道府県名が含まれていないことを確認
  await expect(legend).not.toContainText('愛知県');

  // チェックボックスをクリック
  await page.getByRole('checkbox', { name: '愛知県' }).click();

  // 凡例に都道府県名が含まれていることを確認
  await expect(legend).toContainText('愛知県');
});

test('人口種別を変更するとグラフが更新されるか', async ({ page }, testInfo) => {
  await page.goto('/');

  // 凡例を取得
  const legend = page.locator('svg.highcharts-root .highcharts-legend');

  // 凡例に '愛知県' が含まれていないことを確認
  await expect(legend).not.toContainText('愛知県');

  // チェックボックスを取得
  await page.getByRole('checkbox', { name: '愛知県' }).click();

  // 凡例に '愛知県' が含まれていることを確認
  await expect(legend).toContainText('愛知県');

  // アニメーションが完了するまで待機
  await page.waitForTimeout(1000);
  // スクリーンショットを保存
  const totalPopulationGraph = await page.screenshot({
    fullPage: true,
    animations: 'disabled',
    path: testInfo.outputPath('total-population.png'),
  });

  await page.getByRole('combobox').selectOption('年少人口');

  // アニメーションが完了するまで待機
  await page.waitForTimeout(1000);
  // スクリーンショットを保存
  const youngPopulationGraph = await page.screenshot({
    fullPage: true,
    animations: 'disabled',
    path: testInfo.outputPath('young-population.png'),
  });

  expect(totalPopulationGraph).not.toEqual(youngPopulationGraph);
});
