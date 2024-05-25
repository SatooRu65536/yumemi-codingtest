import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import { type ReactElement } from 'react';
import Header from './_components/Header';
import Provider from './provider';

const inter = Inter({ subsets: ['latin'] });

const SITE_NAME = '都道府県別人口推移比較';
const DESCRIPTION = '都道府県別で人口推移を比較できます。';
const HOST_NAME = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000/');

export const metadata: Metadata = {
  metadataBase: HOST_NAME,
  title: SITE_NAME,
  description: DESCRIPTION,
  openGraph: {
    title: SITE_NAME,
    description: DESCRIPTION,
    url: HOST_NAME,
    siteName: SITE_NAME,
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): ReactElement {
  return (
    <Provider>
      <html lang="ja">
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </html>
    </Provider>
  );
}
