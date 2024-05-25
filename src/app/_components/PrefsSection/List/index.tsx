import { hash } from 'ohash';
import { type ReactElement } from 'react';
import PrefCheckbox from './Checkbox';
import styles from './index.module.scss';
import { type Prefecture } from '@/types/prefecture';

interface Props {
  prefs: Prefecture[] | undefined;
  selectedPrefCodes: number[];
  changeSelectedState: (prefCode: number, isSelect: boolean) => void;
}

export default function PrefsList(props: Props): ReactElement {
  const { prefs, changeSelectedState, selectedPrefCodes } = props;

  return (
    <section className={styles.section}>
      <h2>都道府県一覧</h2>

      <div className={styles.prefs_container}>
        {prefs?.map((pref) => {
          const selected = selectedPrefCodes.includes(pref.prefCode);

          return (
            <PrefCheckbox
              key={hash({ prefCode: pref.prefCode, selected })}
              changeSelectedState={changeSelectedState}
              checked={selected}
              pref={pref}
            />
          );
        })}
      </div>
    </section>
  );
}
