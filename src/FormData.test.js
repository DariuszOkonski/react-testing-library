import { render, screen, within } from '@testing-library/react';
import FormData from './FormData';

// screen.logTestingPlaygroundURL();
test('the form displays two buttons v1', () => {
  render(<FormData />);

  const buttons = screen.getAllByRole('button');

  expect(buttons).toHaveLength(3);
});

test('the form displays two buttons v2', () => {
  render(<FormData />);

  const form = screen.getByRole('form');
  const buttons = within(form).getAllByRole('button');

  expect(buttons).toHaveLength(2);

  // expect(form).toContainRole('button', 2);
});
