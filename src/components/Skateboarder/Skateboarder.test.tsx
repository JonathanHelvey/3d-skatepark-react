import React from 'react';
import { render } from '@testing-library/react';
import Skateboarder from './Skateboarder';

test('renders without crashing', () => {
  render(<Skateboarder />);
});

export {};