import React from 'react';

// Define props interface if needed
interface RailProps {
  // Add any props you need here
  title: string;
}

const Rail: React.FC<RailProps> = ({ title }) => {
  return (
    <div className="rail">
      <mesh position={[0, 0.5, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.05, 0.05, 5, 32]} />
        <meshStandardMaterial color="#808080" metalness={0.8} roughness={0.2} />
      </mesh>
    </div>
  );
};

export default Rail;

