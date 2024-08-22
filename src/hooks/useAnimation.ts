import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

type AnimationFunction = (object: Mesh, state: { clock: { getElapsedTime: () => number } }) => void;

export const useAnimation = (animationFunction: AnimationFunction) => {
  const ref = useRef<Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      animationFunction(ref.current, state);
    }
  });

  return ref;
};