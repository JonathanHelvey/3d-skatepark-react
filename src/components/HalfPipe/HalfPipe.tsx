import React from 'react';
import { COLORS, SIZES, POSITIONS } from '../../constants/sceneConstants';

const HalfPipe: React.FC = () => (
  <mesh rotation={[0, 0, Math.PI / 2]} position={POSITIONS.HALF_PIPE}>
    <cylinderGeometry args={SIZES.HALF_PIPE} />
    <meshStandardMaterial color={COLORS.HALF_PIPE} side={2} />
  </mesh>
);

export default HalfPipe;