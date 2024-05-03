type Point = {
  x: number;
  y: number;
};

const getCoordinates = (): Point => {
  return { x: Math.random(), y: Math.random() };
};

const doublePoint = (point: Point): Point => {
  return { x: point.x * 2, y: point.y * 2 };
};
