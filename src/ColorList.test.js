import { render, screen } from '@testing-library/react';
import ColorList from './ColorList';

test('getBy, queryBy, findBy finding 0 elements', async () => {
  render(<ColorList />);

  expect(() => screen.getByRole('textbox')).toThrow();

  expect(screen.queryByRole('textbox')).toEqual(null);

  let errorThrown = false;
  try {
    await screen.findByRole('textbox');
  } catch (err) {
    errorThrown = true;
  }

  expect(errorThrown).toEqual(true);
});

test('getBy, queryBy, findby whe they find 1 element', async () => {
  render(<ColorList />);

  expect(screen.getByRole('list')).toBeInTheDocument();
  // eslint-disable-next-line testing-library/prefer-presence-queries
  expect(screen.queryByRole('list')).toBeInTheDocument();
  expect(await screen.findByRole('list')).toBeInTheDocument();
});

test('getBy, queryBy, findBy when findinding > 1 elements', async () => {
  render(<ColorList />);

  expect(() => screen.getByRole('listitem')).toThrow();
  expect(() => screen.queryByRole('listitem')).toThrow();

  let errorThrown = false;
  try {
    await screen.findByRole('listitem');
  } catch (err) {
    errorThrown = true;
  }
  expect(errorThrown).toEqual(true);
});

test('getAll, queryAllBy, findAllBy', async () => {
  render(<ColorList />);

  expect(screen.getAllByRole('listitem')).toHaveLength(3);
  expect(screen.queryAllByRole('listitem')).toHaveLength(3);
  expect(await screen.findAllByRole('listitem')).toHaveLength(3);
});
