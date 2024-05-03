function square(num: number) {
  return num * num;
}

function greet(person: string) {
  return `how are you ${person}`;
}

const isEven = (num: number) => num % 2 === 0;

const manyParams = (name: string, age: number, isAdult: boolean) => {};

function defaultParam(name: string = "user") {}

square(5);

greet("john");

manyParams("john", 33, true);

defaultParam();

// annotating return value

function add(num: number): number {
  return num + num;
}

const isOdd = (num: number): boolean => {
  return num % 2 === 1;
};

function doSomething(num: number): number | string {
  if (num > 50) return num.toString();
  return num;
}

const printVal = (guy: string): void => {
  console.log("Hello..", guy);
};

// 'never' type , a function that never return. it either  always throws an exception or never finishes executing

function neverFun(num: number): never {
  if (true) throw new Error();
}

function neverFunAgain(num: number): never {
  while (true) {}
}
