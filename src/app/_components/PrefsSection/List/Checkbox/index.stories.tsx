import type { Meta } from '@storybook/react';
import { type ReactElement } from 'react';
import PrefCheckbox from '.';
import useSelectedPrefs from '@/hooks/useSelectedPrefs';
import { type Prefecture } from '@/types/prefecture';

const meta = {
  title: 'PrefCheckbox',
  component: PrefCheckbox,
  tags: ['autodocs'],
} satisfies Meta<typeof PrefCheckbox>;

export default meta;

const pref: Prefecture = {
  prefCode: 1,
  prefName: '北海道',
};

function Template(): ReactElement {
  const [selectedPrefCodes, changeSelectedState] = useSelectedPrefs();

  return (
    <PrefCheckbox
      changeSelectedState={changeSelectedState}
      checked={selectedPrefCodes.includes(pref.prefCode)}
      pref={pref}
    />
  );
}

export const Default = Template.bind({});
