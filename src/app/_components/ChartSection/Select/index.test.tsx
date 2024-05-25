import { render, screen } from '@testing-library/react';
import PopulationTypeSelector from '.';

describe('PopulationTypeSelector', () => {
  test('タイトルが正しく表示されているか', () => {
    render(<PopulationTypeSelector />);

    const select = screen.getByRole<HTMLSelectElement>('combobox');
    const options = screen.getAllByRole<HTMLOptionElement>('option');

    // select要素が存在するか
    expect(select).toBeDefined();

    options.forEach((option) => {
      select.value = option.value;
      expect(option.selected).toBe(true);
    });
  });
});
