# 都道府県別の総人口推移を見れるWebアプリ
これは [ゆめみパスポート](https://hrmos.co/pages/yumemi/jobs/101000000010) 用のリポジトリです

## 技術スタック
- Next.js (App Router)
- SCSS
- jotai
- Storybook
- Vitest

## 要求環境
- Node.js ^20
- yarn ^1.22

## セットアップ
### インストール
```bash
yarn install
```

### 環境変数の設定
```bash
cp .env.example .env.local
cp .env.example .env.test.local
```

`RESAS_API_KEY` と `RESAS_URL` は [RESAS API](https://opendata.resas-portal.go.jp/docs/api/v1/index.html) を参照してください

## スクリプト
### 開発サーバーの起動
```bash
yarn dev
```

### Storybook の起動
```bash
yarn storybook
```

### 単体テストの実行
```bash
yarn test
```

### フォーマット
```bash
yarn format
```

### Linting
```bash
yarn lint
```


## ディレクトリ構成
```
./src
├── app
│   ├── _components
│   │   ├── Header
│   │   │   ├── index.module.scss
│   │   │   ├── index.stories.ts
│   │   │   ├── index.test.tsx
│   │   │   └── index.tsx
│   │   └── PrefsSection
│   │       ├── List
│   │       │   ├── Checkbox
│   │       │   │   ├── index.module.scss
│   │       │   │   ├── index.stories.tsx
│   │       │   │   ├── index.test.tsx
│   │       │   │   └── index.tsx
│   │       │   ├── index.module.scss
│   │       │   ├── index.stories.tsx
│   │       │   ├── index.test.tsx
│   │       │   └── index.tsx
│   │       └── index.tsx
│   ├── api
│   │   └── prefectures
│   │       ├── prefectureFetcher.ts
│   │       ├── route.test.ts
│   │       └── route.ts
│   ├── favicon.ico
│   ├── globals.scss
│   ├── layout.tsx
│   ├── page.tsx
│   └── provider.tsx
├── hooks
│   └── useSelectedPrefs.ts
├── stores
│   ├── prefsAtom.ts
│   └── selectedPrefsAtom.ts
├── styles
│   ├── responsive.scss
│   └── variables.scss
├── test
│   └── setup.ts
└── types
    └── prefecture.ts
```

### app
ルーティングと各コンポーネントを管理する

- `api`
  - 中間API に関する処理を管理する
- `_components`
  - トップページで使用するコンポーネントを管理する

### hooks
カスタムフックを管理する

### stores
jotai の atom を管理する

### styles
グローバルスタイルを管理する

### test
テスト用のファイルを管理する

- `setup.ts`
  - テストのセットアップを行う
- `e2e`
  - E2E テストを管理する

### types
型定義を管理する
