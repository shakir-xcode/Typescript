type Song = {
  title: string;
  artist: string;
  credits: { writer: string; producer: string };
};

function songDetail(song: Song): void {}

const mySong: Song = {
  title: "song title",
  artist: "some artist",
  credits: {
    writer: "a writer",
    producer: "the producer",
  },
};
songDetail(mySong);
