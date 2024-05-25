import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { type ReactElement } from 'react';
import PopulationTypeSelector from './Select';
import styles from './index.module.scss';
import { type PopulationType } from '@/types/population';

export type ChartData = Array<{
  type: 'line';
  name: string;
  data: number[];
}>;

interface Props {
  data: ChartData;
  years: string[];
  populationType: PopulationType;
}

export default function PopulationChart(props: Props): ReactElement {
  const { data, populationType, years } = props;

  const options: Highcharts.Options = {
    title: undefined,
    xAxis: {
      title: {
        text: '年',
      },
      categories: years,
    },
    yAxis: {
      title: {
        text: '人口',
      },
    },
    series: data,
  };

  return (
    <section className={styles.section}>
      <h2>{populationType}推移</h2>
      <PopulationTypeSelector />
      <HighchartsReact highcharts={Highcharts} options={options} />
    </section>
  );
}
