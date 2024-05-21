import { useId, type ReactElement } from 'react';
import styles from './checkbox.module.scss';
import { type Prefecture } from '@/types/prefecture';

interface Props {
  pref: Prefecture;
  checked: boolean;
  changeSelectedState: (prefCode: number, isSelect: boolean) => void;
}

export default function PrefCheckbox(props: Props): ReactElement {
  const { changeSelectedState, checked, pref } = props;

  const id = useId();

  function handler(): void {
    changeSelectedState(pref.prefCode, !checked);
  }

  return (
    <div className={styles.select}>
      <input checked={checked} id={id} onChange={handler} type="checkbox" />
      <label htmlFor={id}>{pref.prefName}</label>
    </div>
  );
}
