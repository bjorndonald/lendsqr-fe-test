import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import Login from '../pages/login';

test('renders page element', () => {
  const result = render(<App />);
  const linkElement = result.container.querySelector('#page');;
  expect(linkElement).toBeInTheDocument();
});

test('renders login element', () => {
  const result = render(<Login />);
  const linkElement = result.container.querySelector('#login');;
  expect(linkElement).toBeInTheDocument();
});