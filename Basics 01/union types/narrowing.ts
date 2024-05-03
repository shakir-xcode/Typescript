// Narrowing the type is simply doing a type chek before working with a value

function calculateTax(price: number | string, tax: number): number {
  if (typeof price === "string") price = parseFloat(price);

  return price * tax;
}
