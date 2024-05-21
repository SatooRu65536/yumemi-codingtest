'use client';

import { Provider } from 'jotai';
import { type ReactElement, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function App(props: Props): ReactElement {
  const { children } = props;

  return <Provider>{children}</Provider>;
}
