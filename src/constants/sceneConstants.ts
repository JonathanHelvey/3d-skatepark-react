import { Color, Vector3 } from 'three';

export const COLORS = {
  GROUND: new Color('#999999'),
  HALF_PIPE: new Color('#0000ff'),
  SKATEBOARDER: new Color('#ff0000'),
};

export const SIZES = {
  GROUND: [20, 20] as [number, number],
  HALF_PIPE: [5, 5, 10, 32, 1, true, -Math.PI/2, Math.PI] as [number, number, number, number, number, boolean, number, number],
  SKATEBOARDER: [0.5, 1, 0.5] as [number, number, number],
};

export const POSITIONS = {
  CAMERA: new Vector3(10, 5, 10),
  HALF_PIPE: new Vector3(0, 2.5, 0),
  SKATEBOARDER_INITIAL: new Vector3(0, 1, 0),
};