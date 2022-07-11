// const countdown = (start) => {
//   for (let i = start; i >= 0; i--) {
//     console.log(i);
//   }
//   console.log("BLAST OFF!");
// };
// countdown(5);

// const getBigger = (num1, num2) => {
//   if (num1 > num2) {
//     return num1;
//   } else {
//     return num2;
//   }
// };
// console.log(getBigger(3, 4));
// console.log(getBigger(40, 13));

// const favColour = (colour) => {
//   if (colour === "red") {
//     console.log("it's red");
//   } else {
//     console.log("it's not red");
//   }
// };
// favColour("blue");

const favColour2 = (colour) => {
  switch (colour) {
    case "red":
      console.log("it's red");
    case "green":
      console.log("it's green");
      break;
      break;
    case "blue":
      console.log("it's blue");
      break;

    default:
      console.log("it's something else");
      break;
  }
};
favColour2("blue");
