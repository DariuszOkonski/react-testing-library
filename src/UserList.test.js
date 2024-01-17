import { render, screen, within } from '@testing-library/react';
import UserList from './UserList';

test('render one row per user ver 1', () => {
  const users = [
    { name: 'jane', email: 'jane@jane.com' },
    { name: 'mark', email: 'mark@mark.com' },
  ];
  render(<UserList users={users} />);

  const janeRow = screen.getByRole('row', { name: /jane jane@jane\.com/i });
  const markRow = screen.getByRole('row', { name: /mark mark@mark\.com/i });

  expect(janeRow).toBeInTheDocument();
  expect(markRow).toBeInTheDocument();
});

test('render one row per user ver 2', () => {
  const users = [
    { name: 'jane', email: 'jane@jane.com' },
    { name: 'sam', email: 'sam@sam.com' },
  ];
  render(<UserList users={users} />);
  // screen.logTestingPlaygroundURL();

  const rows = screen.getAllByRole('row');

  expect(rows).toHaveLength(3);
});

test('render one row per user ver 3', () => {
  const users = [
    { name: 'jane', email: 'jane@jane.com' },
    { name: 'sam', email: 'sam@sam.com' },
  ];
  render(<UserList users={users} />);

  const rows = within(screen.getByTestId('users')).getAllByRole('row');

  expect(rows).toHaveLength(2);
});

test('render one row per user ver 4', () => {
  const users = [
    { name: 'jane', email: 'jane@jane.com' },
    { name: 'sam', email: 'sam@sam.com' },
  ];
  const { container } = render(<UserList users={users} />);

  // eslint-disable-next-line
  const rows = container.querySelectorAll('tbody tr');

  expect(rows).toHaveLength(2);
});

test('render the email and name of each user v1', () => {
  const users = [
    { name: 'jane', email: 'jane@jane.com' },
    { name: 'sam', email: 'sam@sam.com' },
  ];
  render(<UserList users={users} />);

  for (let user of users) {
    const name = screen.getByRole('cell', { name: user.name });
    const email = screen.getByRole('cell', { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
