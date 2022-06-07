import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders react logo with alt', () => {
  render(<App />);

  const paragraphElement = screen.getByAltText(/logo react/i);
  expect(paragraphElement).toBeInTheDocument();
});

test('renders wordpress logo with alt', () => {
  render(<App />);

  const paragraphElement = screen.getByAltText(/logo wordpress/i);
  expect(paragraphElement).toBeInTheDocument();
});