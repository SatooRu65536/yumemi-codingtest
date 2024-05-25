import { type ReactElement } from 'react';
import ChartSection from './_components/ChartSection';
import PrefsSection from './_components/PrefsSection';

export default function Home(): ReactElement {
  return (
    <main>
      <PrefsSection />
      <ChartSection />
    </main>
  );
}
