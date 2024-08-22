import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { POSITIONS } from '../../constants/sceneConstants';
import Ground from '../Ground';
import HalfPipe from '../HalfPipe';
import Skateboarder from '../Skateboarder';

const Skatepark: React.FC = () => (
  <Canvas camera={{ position: POSITIONS.CAMERA }}>
    <OrbitControls />
    <ambientLight intensity={0.5} />
    <pointLight position={[10, 10, 10]} />
    <Ground />
    <HalfPipe />
    <Skateboarder />
  </Canvas>
);

export default Skatepark;