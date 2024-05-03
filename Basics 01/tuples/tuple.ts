// Typescript specific
// Tuples are arrays of fixed lengths and ordered with specific types

const rbg: [number, number, number] = [255, 0, 255];

type HTTPResponse = [number, string];
const goodRes: HTTPResponse = [200, "OK"];
const badRes: HTTPResponse = [404, "NOT FOUND"];
