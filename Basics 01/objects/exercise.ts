type Movie = {
  readonly title: string;
  originalTitle?: string;
  director: string;
  releaseYear: number;
  boxOffice: {
    budget: number;
    grossUS: number;
    grossWorldwide: number;
  };
};

const dune: Movie = {
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

const getProfit = (movie: Movie): number =>
  movie.boxOffice.grossWorldwide - movie.boxOffice.budget;
const getProfitOther = ({
  boxOffice: { budget, grossWorldwide },
}: Movie): number => grossWorldwide - budget;
