import { useId, type ReactElement } from 'react';
import styles from './select.module.scss';
import { type Prefecture } from '@/types/prefecture';

interface Props {
  pref: Prefecture;
}

export default function PrefSelect(props: Props): ReactElement {
  const { pref } = props;

  const id = useId();

  return (
    <div className={styles.select}>
      <input id={id} type="checkbox" />
      <label htmlFor={id}>{pref.prefName}</label>
    </div>
  );
}
