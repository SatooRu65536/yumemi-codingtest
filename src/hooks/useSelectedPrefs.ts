import { useAtom } from 'jotai';
import { selectedPrefsAtom } from '@/stores/selectedPrefsAtom';

type UsePrefs = [number[], (prefCode: number, isSelect: boolean) => void];

export default function useSelectedPrefs(): UsePrefs {
  const [selectPrefCodes, setSelectPrefCodes] = useAtom(selectedPrefsAtom);

  /**
   * 都道府県を選択する
   * @param prefCode
   */
  function select(prefCode: number): void {
    const newSelectPrefs = [...selectPrefCodes, prefCode];
    const newSelectPrefSet = new Set(newSelectPrefs);
    setSelectPrefCodes(Array.from(newSelectPrefSet));
  }

  /**
   * 都道府県の選択を解除する
   * @param prefCode
   */
  function remove(prefCode: number): void {
    const newSelectPrefs = selectPrefCodes.filter((code) => code !== prefCode);
    setSelectPrefCodes(newSelectPrefs);
  }

  /**
   * 都道府県の選択状態を切り替える
   * @param prefCode
   * @param isSelect
   */
  function change(prefCode: number, isSelect: boolean): void {
    if (isSelect) select(prefCode);
    else remove(prefCode);
  }

  return [selectPrefCodes, change];
}
