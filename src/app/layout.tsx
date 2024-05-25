import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import { type ReactElement } from 'react';
import Header from './_components/Header';
import Provider from './provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '都道府県別人口推移比較',
  description: '都道府県別で人口推移を比較できます。',
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
