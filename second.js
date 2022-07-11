/********************************************** eg. 1 */
function getBigger(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(getBigger(2, 100));
console.log(getBigger(36, 9));

/********************************************** eg. 2 */
function multiplyThree(num1, num2, num3) {
  return num1 * num2 * num3;
}
console.log(multiplyThree(2, 2, 2));

/********************************************** eg. 3 */
function greet(name, time) {
  if (time === "AM") {
    return `Good morning ${name}`;
  } else if (time === "PM") {
    return `Good afternoon ${name}`;
  } else {
    return `Hello ${name}`;
  }
}
console.log(greet("Natalie"));
console.log(greet("Winslow", "PM"));
