import React from 'react';
import { render } from '@testing-library/react';
import App, { incrementCount } from './App';

test('renders without crashing', () => {
  render(<App />);
});

test('balls and strikes are displaying', () => {
  const { getByText } = render(<App />);
  getByText(/balls/i);
  getByText(/strikes/i);
});

test('dashboard buttons are displaying', () => {
  const { getByTestId, getByText } = render(<App />);
  getByTestId("strike-btn");
  getByTestId("ball-btn");
  getByText(/foul/i);
  getByText(/hit/i);
  getByTestId("out-btn");
})

test('balls, strikes, out are initialized to 0', () => {
  const { getByTestId } = render(<App />);
  const ballCount = getByTestId("ballCount");
  const strikeCount = getByTestId("strikeCount");
  const outCount = getByTestId("outCount");
  expect(ballCount.textContent).toBe('0');
  expect(strikeCount.textContent).toBe('0');
  expect(outCount.textContent).toBe('0');
})

test('inning initialized to 1', () => {
  const { getByTestId } = render(<App />);
  const inningCount = getByTestId("inningCount");
  expect(inningCount.textContent).toBe('1');
})

test('incrementCount adds 1 to counter', () => {
  expect(incrementCount(0)).toBe(1);
  expect(incrementCount(1)).toBe(2);
})
