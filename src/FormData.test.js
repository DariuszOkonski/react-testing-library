import { render, screen, within } from '@testing-library/react';
import FormData from './FormData';

function toContainRole(container, role, quantity = 1) {
  const elements = within(container).queryAllByRole(role);

  if (elements.length === quantity) {
    return {
      pass: true,
    };
  }

  return {
    pass: false,
    message: () =>
      `Expected to find ${quantity} ${role} elements. Found ${elements.length} instead`,
  };
}

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
  expect.extend({ toContainRole });
});
