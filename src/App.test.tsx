import React from 'react';
import { render, screen } from '@testing-library/react';
import Sc from './routes/sc';

test('renders learn react link', () => {
  render(<Sc />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
