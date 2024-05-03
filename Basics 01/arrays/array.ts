const score: number[] = [43, 75];
score.push(64);

const names: string[] = [];
names.push("john");

const bools: boolean[] = [true];
bools.push(false);

const anyArray: any[] = [34, "adf"];
anyArray.push(true);

const emptyArray: [] = [];
// emptyArray.push(4)       //can't do

const gameBoard: number[][] = [
  [3, 5, 7],
  [2, 8, 3],
];

type Point = {
  x: number;
  y: number;
};

const points: Point[] = [];
points.push({ x: 34, y: 23 });
