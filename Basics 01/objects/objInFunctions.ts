// Object as parameter
function printName(person: { first: string; last: string }): void {
  console.log(`You are ${person.first} ${person.last}`);
}

printName({ first: "john", last: "doe" });

// Object as return value
function getValue(name: string, age: number): { name: string; age: number } {
  return { name, age };
}

console.log(getValue("john doe", 54));

// Passing object as object literal and as a reference
function asLiteral(user: { first: string; last: string }): void {
  console.log("Object literal passed");
}
asLiteral({ first: "john", last: "doe" });

const user = { first: "john", last: "doe", age: 43, isAlive: true };
function asReference(user: { first: string; last: string }): void {
  console.log("Object reference passed");
}

asReference(user);
