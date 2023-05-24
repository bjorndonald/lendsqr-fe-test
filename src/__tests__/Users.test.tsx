import React from 'react';
import { render, screen } from '@testing-library/react';
import Users from '../pages/users/Users';

test('renders page element', () => {
  const result = render(<Users />);
  const linkElement = result.container.querySelector('header');;
  expect(linkElement).toBeInTheDocument();
});