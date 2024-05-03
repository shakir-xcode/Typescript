let age: number = 34;
let nm: string = "john";
nm = "jane";
let foo: boolean = true;
let another: string;
another = "this is a string";

// Type Inference
let movie = "spiderman";
let isFunny = true;
isFunny = false;

// 'any' type, type checking is turned off for 'any' type
let thing: any = 545;
thing = "some string";
thing = true;
thing();
