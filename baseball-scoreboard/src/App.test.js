import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
});

test('balls and strikes are displaying', () => {
  const { getByText } = render(<App />);
  getByText(/balls/i);
  getByText(/strikes/i);
});

test('dashboard buttons are displaying', () => {
  const { getByTestId } = render(<App />);
  getByTestId("strike-btn");
  getByTestId("ball-btn");
  getByTestId("foul-btn");
  getByTestId("hit-btn");
})
