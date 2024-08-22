import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated, config } from '@react-spring/three';
import { Mesh, Vector3, Euler } from 'three';
import { COLORS, SIZES, POSITIONS } from '../../constants/sceneConstants';

const Skateboarder: React.FC = () => {
  const meshRef = useRef<Mesh>(null);

  const { position, rotation } = useSpring({
    from: { position: [0, 1, 0], rotation: [0, 0, 0] },
    config: config.wobbly,
  });

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    position.start([
      Math.sin(t) * 5,
      1 + Math.abs(Math.sin(t * 2)) * 2,
      0
    ]);
    rotation.start([0, t, 0]);
  });

  return (
    <animated.mesh
      ref={meshRef}
      position={position as unknown as Vector3}
      rotation={rotation as unknown as Euler}
    >
      <boxGeometry args={SIZES.SKATEBOARDER} />
      <meshStandardMaterial color={COLORS.SKATEBOARDER} />
    </animated.mesh>
  );
};

export default Skateboarder;