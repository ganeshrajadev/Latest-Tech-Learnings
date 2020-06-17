const a: number = 22;

interface Point {
  x: number;
  y: number;
  z?: number;
  w?: any;
}

const point2D: Point = {
  x: 22,
  y: 22,
};

const point3D: Point = {
  x: 22,
  y: 22,
  z: 33,
};

type AddValueType = (x: number, y: number) => number;

const addValue: AddValueType = (x: number, y: number) => x + y;

let multiple: number | string = 22;

multiple = 'string';

interface PointX {
  x: number;
}

interface PointY {
  y: number;
}

type Point2Dim = (PointX & PointY) | string;

const Point2D2: Point2Dim = {
  x: 22,
  y: 33,
};
