import { type ReactElement } from 'react';
import styles from './index.module.scss';
import PrefSelect from './select';
import { type Prefecture } from '@/types/prefecture';

interface Props {
  prefs: Prefecture[] | undefined;
}

export default function PrefsList(props: Props): ReactElement {
  const { prefs } = props;

  return (
    <section className={styles.section}>
      <h2>都道府県</h2>

      <div className={styles.prefs_container}>
        {prefs?.map((pref) => <PrefSelect key={pref.prefCode} pref={pref} />)}
      </div>
    </section>
  );
}
