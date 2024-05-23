import { type ReactElement } from 'react';
import PopulationChart from './Chart';

interface Props {
  prefCodes: number[];
}

export default function PopulationChartWrapper(props: Props): ReactElement {
  const { prefCodes } = props;

  return (
    <section>
      <PopulationChart prefCodes={prefCodes} />
    </section>
  );
}
