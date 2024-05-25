import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { type ReactElement } from 'react';
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
    title: {
      text: `${populationType}推移`,
    },
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
      <HighchartsReact highcharts={Highcharts} options={options} />
    </section>
  );
}
