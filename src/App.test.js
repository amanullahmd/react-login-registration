import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Shop.App title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Shop\.App/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders login route', () => {
  render(<App />);
  const loginLink = screen.getByText(/don't have an account/i); // Assuming this is in your Login component
  expect(loginLink).toBeInTheDocument();
});

test('renders register route', () => {
  render(<App />);
  const registerLink = screen.getByText(/register/i); // Assuming this is part of your Register component
  expect(registerLink).toBeInTheDocument();
});
