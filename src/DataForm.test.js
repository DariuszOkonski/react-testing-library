import { render, screen } from '@testing-library/react';
import DataForm from './DataForm';

// screen.logTestingPlaygroundURL();
test('selecting different elemnts', () => {
  render(<DataForm />);

  const elements = [
    screen.getByRole('button'),
    screen.getByLabelText('Email'),
    screen.getByPlaceholderText('Red'),
    screen.getByText('Enter Data'),
    screen.getByDisplayValue('asdf@asdf.com'),
    screen.getByAltText('data'),
    screen.getByTitle('Click when ready to submit'),
    screen.getByTestId('image wrapper'),
    screen.getByTestId('label-email'),
  ];

  for (let element of elements) {
    expect(element).toBeInTheDocument();
  }
});
