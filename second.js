const chicagoMedCast = {
  fname: "Robyn",
  lName: "Charles",
  age: 31,
  job: "Epidemiologist",
  "gone or not": "gone",
};

console.log(chicagoMedCast["fname"]);
console.log(chicagoMedCast.lName);
console.log(chicagoMedCast["gone or not"]);

chicagoMedCast["age"] = 27;
console.log(chicagoMedCast);

const users = [
  {
    username: "Pete",
  },
  {
    username: "Edis",
    scores: [10, 1, 2, 3],
  },
  {
    username: "Holly",
  },
];

console.log(users[1].username);
console.log(users[1]["username"]);
console.log(users[1]["scores"][0]);
