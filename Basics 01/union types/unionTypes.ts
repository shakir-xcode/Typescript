let age: number | string = 73;
age = "43";

let data: string | number | boolean = 5434;
data = "some data";
data = false;

type Point = {
  x: number;
  y: number;
};
type Loc = {
  lat: number;
  lon: number;
};

let coordinates: Point | Loc = {
  x: 343,
  y: 232,
};

coordinates = {
  lat: 43.6633,
  lon: 21.5533,
};
