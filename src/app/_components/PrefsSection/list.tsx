import { type ReactElement } from 'react';
import { type Prefecture } from '@/types/prefecture';

interface Props {
  prefs: Prefecture[] | undefined;
}

export default function PrefsList(props: Props): ReactElement {
  const { prefs } = props;

  return (
    <section>
      <h2>Preferences</h2>

      {prefs?.map((pref) => <div key={pref.prefCode}>{pref.prefName}</div>)}
    </section>
  );
}
