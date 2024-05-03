var dune = {
    title: "Dune",
    originalTitle: "Dune Part One",
    director: "Denis Villeneuve",
    releaseYear: 2021,
    boxOffice: {
        budget: 165000000,
        grossUS: 108325434,
        grossWorldwide: 400553343,
    },
};
var getProfit = function (movie) {
    return movie.boxOffice.grossWorldwide - movie.boxOffice.budget;
};
var getProfitOther = function (_a) {
    var _b = _a.boxOffice, budget = _b.budget, grossWorldwide = _b.grossWorldwide;
    return grossWorldwide - budget;
};
