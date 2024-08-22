import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Canvas } from '@react-three/fiber';
import Bench from './Bench';

describe('Bench component', () => {
  it('renders without crashing', () => {
    render(
      <Canvas>
        <Bench />
      </Canvas>
    );
  });

  it('renders with correct structure', () => {
    const { container } = render(
      <Canvas>
        <Bench />
      </Canvas>
    );
    
    // Check if the bench group is present
    const benchGroup = container.querySelector('group');
    expect(benchGroup).toBeInTheDocument();

    // Check if the seat mesh is present
    const seatMesh = container.querySelector('mesh[name="seat"]');
    expect(seatMesh).toBeInTheDocument();

    // Check if the backrest mesh is present
    const backrestMesh = container.querySelector('mesh[name="backrest"]');
    expect(backrestMesh).toBeInTheDocument();

    // Check if the legs are present
    const legMeshes = container.querySelectorAll('mesh[name^="leg"]');
    expect(legMeshes.length).toBe(4);
  });

  // Add more specific tests as needed based on your Bench component implementation
});
