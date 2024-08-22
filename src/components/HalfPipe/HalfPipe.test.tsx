import React from 'react';
import { render } from '@testing-library/react';
import HalfPipe from './HalfPipe';

test('renders without crashing', () => {
  render(<HalfPipe />);
});

export {};