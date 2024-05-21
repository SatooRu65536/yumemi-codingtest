import { type ReactElement } from 'react';
import styles from './index.module.scss';

export default function Header(): ReactElement {
  return (
    <header className={styles.header}>
      <h1>都道府県別総人口推移知れる.app</h1>
    </header>
  );
}
