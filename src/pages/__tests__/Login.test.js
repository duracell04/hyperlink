import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

// Mock Firebase config and auth functions
jest.mock('../../configs/firebase', () => ({ auth: {} }));
const signInMock = jest.fn();
jest.mock('firebase/auth', () => ({
  signInWithEmailAndPassword: (...args) => signInMock(...args),
}));

beforeEach(() => {
  signInMock.mockReset();
});

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

test('shows error message for wrong password', async () => {
  signInMock.mockRejectedValue({ code: 'auth/wrong-password' });

  render(
    <MemoryRouter>
      <Login />
    </MemoryRouter>
  );

  await userEvent.type(screen.getByPlaceholderText('Your email'), 'user@example.com');
  await userEvent.type(screen.getByPlaceholderText('Your password'), 'badpass');
  userEvent.click(screen.getByRole('button', { name: /Login/i }));

  await waitFor(() =>
    expect(screen.getByText('Incorrect email or password.')).toBeInTheDocument()
  );
});
