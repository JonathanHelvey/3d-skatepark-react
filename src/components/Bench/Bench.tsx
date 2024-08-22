import React from 'react';
import { useThree } from '@react-three/fiber';

interface BenchProps {
  position?: [number, number, number];
}

const Bench: React.FC<BenchProps> = ({ position = [0, 0, 0] }) => {
  const { viewport } = useThree();

  const seatWidth = 2;
  const seatDepth = 0.6;
  const seatHeight = 0.1;
  const legHeight = 0.4;
  const backrestHeight = 0.5;

  return (
    <group position={position}>
      {/* Seat */}
      <mesh name="seat" position={[0, legHeight + seatHeight / 2, 0]}>
        <boxGeometry args={[seatWidth, seatHeight, seatDepth]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>

      {/* Backrest */}
      <mesh name="backrest" position={[0, legHeight + seatHeight + backrestHeight / 2, seatDepth / 2 - 0.05]}>
        <boxGeometry args={[seatWidth, backrestHeight, 0.1]} />
        <meshStandardMaterial color="#8B4513" />
      </mesh>

      {/* Legs */}
      {[[-0.9, 0.25], [0.9, 0.25], [-0.9, -0.25], [0.9, -0.25]].map((pos, index) => (
        <mesh key={index} name={`leg${index + 1}`} position={[pos[0], legHeight / 2, pos[1]]}>
          <boxGeometry args={[0.1, legHeight, 0.1]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
      ))}
    </group>
  );
};

export default Bench;
