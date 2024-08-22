import React from 'react';
import { render } from '@testing-library/react';
import Ground from './Ground';

test('renders without crashing', () => {
  render(<Ground />);
});

export {};