import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders page element', () => {
  const result = render(<App />);
  const linkElement = result.container.querySelector('#page');;
  expect(linkElement).toBeInTheDocument();
});