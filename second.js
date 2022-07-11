// const countIncluded = (singleNum, arr) => {
//   let count = 0;

//   for (const el of arr) {
//     if (el === singleNum) {
//       count++;
//     }
//   }

//   return count;
// };
// console.log(countIncluded(1, [2, 1, 2, 3, 1, 1, 1, 4]));

const constGetSmallerCount = (val1, val2, arr) => {
  let count1 = 0;
  let count2 = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val1) {
      count1++;
    } else if (arr[i] === val2) {
      count2++;
    }
  }
  if (count1 < count2) {
    return val1;
  } else if (count1 > count2) {
    return val2;
  } else {
    return "same";
  }
};

console.log(constGetSmallerCount(1, 2, [1, 1, 2, 3, 4])); // -> 2
console.log(constGetSmallerCount(1, 2, [1, 2, 2, 3, 1, 2, 3, 4, 2])); // -> 1
console.log(constGetSmallerCount(8, 5, [5, 5, 8])); // -> 8

// Write a function that takes 3 arguments
// Two values and an array
// Return the value that appears fewer times in the array
