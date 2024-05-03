type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 424,
  username: "josh33",
};

console.log(user.id);

// user.id = 5423;          // can't do
