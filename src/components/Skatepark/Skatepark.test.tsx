import React from 'react';
import { render } from '@testing-library/react';
import Skatepark from './Skatepark';

test('renders without crashing', () => {
  render(<Skatepark />);
});

export {};