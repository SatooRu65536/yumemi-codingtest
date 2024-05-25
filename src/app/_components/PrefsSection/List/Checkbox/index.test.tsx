import { render, screen } from '@testing-library/react';
import { Provider } from 'jotai';
import { act, type ReactElement } from 'react';
import PrefCheckbox from '.';
import useSelectedPrefs from '@/hooks/useSelectedPrefs';
import { type Prefecture } from '@/types/prefecture';

const pref: Prefecture = {
  prefCode: 1,
  prefName: '北海道',
};

function TestPrefCheckbox(): ReactElement {
  const [selectedPrefCodes, changeSelectedState] = useSelectedPrefs();

  return (
    <Provider>
      <PrefCheckbox
        changeSelectedState={changeSelectedState}
        checked={selectedPrefCodes.includes(pref.prefCode)}
        pref={pref}
      />
    </Provider>
  );
}

describe('components PrefCheckbox', () => {
  test('チェックボックスを選択できるか', () => {
    render(<TestPrefCheckbox />);

    const checkbox = screen.getByRole<HTMLInputElement>('checkbox');

    expect(checkbox.checked).toBe(false);
    act(() => {
      checkbox.click();
    });
    expect(checkbox.checked).toBe(true);
  });
});
