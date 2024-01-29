import { render, screen } from '@testing-library/react';
import IconButtons from './IconButtons';

test('find elements based on label', () => {
  render(<IconButtons />);

  // screen.logTestingPlaygroundURL();

  const signInButton = screen.getByRole('button', { name: /sign in/i });
  const signOutButton = screen.getByRole('button', { name: /sign out/i });

  expect(signInButton).toBeInTheDocument();
  expect(signOutButton).toBeInTheDocument();
});
