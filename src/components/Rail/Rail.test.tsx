import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Canvas } from '@react-three/fiber';
import Rail from './Rail';

describe('Rail component', () => {
  it('renders without crashing', () => {
    render(
      <Canvas>
        <Rail title="Test Rail" />
      </Canvas>
    );
  });

  it('renders with correct props', () => {
    const { container } = render(
      <Canvas>
        <Rail title="Test Rail" />
      </Canvas>
    );
    
    // Check if the rail mesh is present
    const railMesh = container.querySelector('mesh');
    expect(railMesh).toBeInTheDocument();

    // Check if the cylinder geometry is present
    const cylinderGeometry = container.querySelector('cylinderGeometry');
    expect(cylinderGeometry).toBeInTheDocument();

    // Check if the material is present
    const material = container.querySelector('meshStandardMaterial');
    expect(material).toBeInTheDocument();
  });
});
