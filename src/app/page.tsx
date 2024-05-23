import { type ReactElement } from 'react';
import PopulationChart from './_components/PopulationChart';
import PrefsSection from './_components/PrefsSection';

export default function Home(): ReactElement {
  return (
    <main>
      <PrefsSection />
      <PopulationChart />
    </main>
  );
}
