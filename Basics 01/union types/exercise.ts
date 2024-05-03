let highScore: number | boolean;

const stuff: number[] | string[] = [];

type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

type SkiSchoolStudent = {
  name: string;
  age: number;
  sport: "ski" | "snowboard";
  level: SkillLevel;
};

type RGB = {
  r: number;
  g: number;
  b: number;
};

type HSL = {
  h: number;
  s: number;
  l: number;
};

const colors: (RGB | HSL)[] = [];

const greet = (people: string | string[]): void => {
  if (typeof people === "string") {
    console.log("Hello ", people);
    return;
  }
  people.forEach((person) => {
    console.log("Hello ", person);
  });
};
