import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

// Mock Firebase config and auth functions
jest.mock('../../configs/firebase', () => ({ auth: {} }));
jest.mock('firebase/auth', () => ({
  signInWithEmailAndPassword: jest.fn(),
}));

import Login from '../Login';

test('renders login form', () => {
  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  expect(screen.getAllByText(/Login/i).length).toBeGreaterThan(0);
  expect(screen.getByPlaceholderText('Your email')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Your password')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /Login/i })).toBeInTheDocument();
});
