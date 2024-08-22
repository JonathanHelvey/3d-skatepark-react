import React from 'react';
import { COLORS, SIZES } from '../../constants/sceneConstants';

const Ground: React.FC = () => (
  <mesh rotation={[-Math.PI / 2, 0, 0]}>
    <planeGeometry args={SIZES.GROUND} />
    <meshStandardMaterial color={COLORS.GROUND} />
  </mesh>
);

export default Ground;