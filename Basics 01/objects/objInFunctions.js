// Object as parameter
function printName(person) {
    console.log("You are ".concat(person.first, " ").concat(person.last));
}
printName({ first: "john", last: "doe" });
// Object as return value
function getValue(name, age) {
    return { name: name, age: age };
}
console.log(getValue("john doe", 54));
// Passing object as object literal and as a reference
function asLiteral(user) {
    console.log("Object literal passed");
}
asLiteral({ first: "john", last: "doe" });
var user = { first: "john", last: "doe", age: 43, isAlive: true };
function asReference(user) {
    console.log("Object reference passed");
}
asReference(user);
