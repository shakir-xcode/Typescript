var ages = [];
var gameBoard = [];
gameBoard.push(["O", "X", "X"]);
var myProducts = [
    { name: "laptop", price: 34000 },
    { name: "earbuds", price: 5433 },
    { name: "adapter", price: 400 },
];
var getTotal = function (products) {
    var total = 0;
    products.forEach(function (product) { return (total += product.price); });
    return total;
};
