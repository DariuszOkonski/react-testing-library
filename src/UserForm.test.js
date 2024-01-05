import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './UserForm';
import { act } from 'react-dom/test-utils';

test('it shows two inputs and a button', () => {
  const mock = jest.fn();
  render(<UserForm onUserAdd={mock} />);

  // screen.logTestingPlaygroundURL();
  const inputs = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test('it calls onUserAdd when the form is submitted (not the best implementation)', () => {
  const argList = [];
  const callback = (...args) => {
    argList.push(args);
  };
  render(<UserForm onUserAdd={callback} />);

  const [nameInput, emailInput] = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    user.click(nameInput);
    user.keyboard('jane');

    user.clear(emailInput);
    user.keyboard('jane@jane.com');

    user.click(button);
  });

  expect(argList).toHaveLength(1);
  expect(argList[0][0]).toEqual({ name: 'jane', email: 'jane@jane.com' });
});

test('it calls onUserAdd when the form is submitted (best implementation)', () => {
  const mock = jest.fn();
  render(<UserForm onUserAdd={mock} />);

  const [nameInput, emailInput] = screen.getAllByRole('textbox');
  const button = screen.getByRole('button');

  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    user.click(nameInput);
    user.keyboard('jane');

    user.click(emailInput);
    user.keyboard('jane@jane.com');

    user.click(button);
  });

  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledTimes(1);
  expect(mock).toHaveBeenCalledWith({
    name: 'jane',
    email: 'jane@jane.com',
  });
});

test('it calls onUserAdd when the form is submited (get element by label text)', () => {
  const mock = jest.fn();
  render(<UserForm onUserAdd={mock} />);

  // label and textbox has to be connected by htmlFor and id
  const nameInput = screen.getByRole('textbox', { name: /enter name/i });
  const emailInput = screen.getByRole('textbox', { name: /enter email/i });
  const button = screen.getByRole('button', { name: /add user/i });

  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    user.click(nameInput);
    user.keyboard('jane');

    user.click(emailInput);
    user.keyboard('jane@jane.com');

    user.click(button);
  });

  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledTimes(1);
  expect(mock).toHaveBeenCalledWith({
    name: 'jane',
    email: 'jane@jane.com',
  });
});

test('empties the two inputs when form is submitted', () => {
  const mock = jest.fn();
  render(<UserForm onUserAdd={mock} />);

  const nameInput = screen.getByRole('textbox', { name: /enter name/i });
  const emailInput = screen.getByRole('textbox', { name: /enter email/i });
  const button = screen.getByRole('button', { name: /add user/i });

  // eslint-disable-next-line testing-library/no-unnecessary-act
  act(() => {
    user.click(nameInput);
    user.keyboard('jane');

    user.click(emailInput);
    user.keyboard('jane@jane.com');

    user.click(button);
  });

  expect(nameInput).toHaveValue('');
  expect(emailInput).toHaveValue('');
});
