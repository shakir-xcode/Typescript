type Person = {
  name: string;
  age: number;
};

type Faculty = {
  eId: number;
  salary: number;
};

type Student = {
  rollno: number;
  course: string;
};

type Helper = Person & {
  workDuration: number;
};

type CsFaculty = Person & Faculty;

type CsStudent = Person & Student;

const facultyMemberOne: CsFaculty = {
  eId: 5334,
  name: "kevin powel",
  age: 54,
  salary: 45000,
};

const studentOne: CsStudent = {
  name: "kevin powel",
  age: 54,
  rollno: 80003,
  course: "DSA",
};

const helperOne: Helper = {
  name: "John doe",
  age: 34,
  workDuration: 6,
};
