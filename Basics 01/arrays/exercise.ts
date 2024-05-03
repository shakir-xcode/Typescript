const ages: number[] = [];

const gameBoard: string[][] = [];
gameBoard.push(["O", "X", "X"]);

type Product = {
  name: string;
  price: number;
};

const myProducts: Product[] = [
  { name: "laptop", price: 34000 },
  { name: "earbuds", price: 5433 },
  { name: "adapter", price: 400 },
];

const getTotal = (products: Product[]): number => {
  let total = 0;
  products.forEach((product) => (total += product.price));
  return total;
};
