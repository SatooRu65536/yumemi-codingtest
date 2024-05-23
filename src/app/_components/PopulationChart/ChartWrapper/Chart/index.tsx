import { type ReactElement } from 'react';

interface Props {
  prefCodes: number[];
}

export default function PopulationChart(props: Props): ReactElement {
  const { prefCodes } = props;

  return <div>{prefCodes}</div>;
}
