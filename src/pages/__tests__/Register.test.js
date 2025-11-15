/* eslint-disable @typescript-eslint/no-var-requires */
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// Mock Firebase config and auth functions
jest.mock('../../configs/firebase', () => ({ auth: {} }));
jest.mock('firebase/auth', () => ({
  createUserWithEmailAndPassword: jest.fn(),
}));

import Register from '../Register';

test('renders registration form', () => {
  render(
    <MemoryRouter>
      <Register />
    </MemoryRouter>
  );

  expect(screen.getByText(/Signup/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Your email')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Your password')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Confirm password')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Register/i })).toBeInTheDocument();
});
