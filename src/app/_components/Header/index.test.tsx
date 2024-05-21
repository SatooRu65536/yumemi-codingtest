import { render, screen } from '@testing-library/react';
import Header from '.';

describe('components Header', () => {
  test('タイトルが正しく表示されるか', () => {
    render(<Header />);
    const title = screen.getByRole('heading', { level: 1 });

    expect(title).toBeDefined();
  });
});
