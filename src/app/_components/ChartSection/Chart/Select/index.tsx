import { useAtom } from 'jotai';
import { type ChangeEvent, useId, type ReactElement } from 'react';
import styles from './index.module.scss';
import { POPULATION_TYPES } from '@/consts/populations';
import { selectedPopulationAtom } from '@/stores/selectedPopulationAtom';
import { type PopulationType } from '@/types/population';

export default function PopulationTypeSelector(): ReactElement {
  const [populationType, setPopulationType] = useAtom(selectedPopulationAtom);
  const id = useId();

  function changePopulationType(e: ChangeEvent<HTMLSelectElement>): void {
    const { value } = e.target;

    if ((POPULATION_TYPES as readonly string[]).includes(value)) {
      setPopulationType(value as PopulationType);
    }
  }

  return (
    <div className={styles.combobox}>
      <label htmlFor={id}>人口種別:</label>
      <select id={id} onChange={changePopulationType} value={populationType}>
        {POPULATION_TYPES.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
    </div>
  );
}
