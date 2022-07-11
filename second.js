const arr = [100, 90, 2, 45, 66, 0, 1, 2, 3];

console.log(arr.length);
console.log(arr.indexOf(3));

for (const item of arr) {
  console.log("Item: ", item);
}

arr.sort((a, b) => a - b);
console.log(arr);

const greaterThan3 = (arr) => {
  for (const singleArrItem of arr) {
    if (singleArrItem > 3) {
      console.log(singleArrItem);
    }
  }
};
greaterThan3([2, 45, 66, 0, 1, 2, 3]);
