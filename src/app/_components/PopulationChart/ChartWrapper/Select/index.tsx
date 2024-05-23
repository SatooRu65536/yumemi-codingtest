import { useSetAtom } from 'jotai';
import { type ChangeEvent, useId, type ReactElement } from 'react';
import { POPULATION_TYPES } from '@/consts/populations';
import { selectedPopulationAtom } from '@/stores/selectedPopulationAtom';
import { type PopulationType } from '@/types/population';

export default function PopulationTypeSelector(): ReactElement {
  const setPopulationType = useSetAtom(selectedPopulationAtom);
  const id = useId();

  function changePopulationType(e: ChangeEvent<HTMLSelectElement>): void {
    const { value } = e.target;

    if ((POPULATION_TYPES as readonly string[]).includes(value)) {
      setPopulationType(value as PopulationType);
    }
  }

  return (
    <>
      <label htmlFor={id}>hi</label>
      <select id={id} onChange={changePopulationType}>
        {POPULATION_TYPES.map((type) => (
          <option key={type} value={type}>
            {type}
          </option>
        ))}
      </select>
      ;
    </>
  );
}
