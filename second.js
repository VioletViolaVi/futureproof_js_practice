// Write a function that takes in two arrays
// Return true if all the elements in array 1
// Are also found in array 2
// containsAll([1, 2, 3], [1, 2]) -> false
// containsAll([1], [1, 2, 3]) -> true

// Optional
// Strings are also objects with methods
// Make a function that checks if two strings are anagrams

const containsAll = (arr1, arr2) => {
  for (const singleVal of arr1) {
    if (!arr2.includes(singleVal)) {
      return false;
    }
  }
  return true;
};
console.log(containsAll([1, 2, 3], [1, 2])); // false
console.log(containsAll([1, 2, 3], [1, 2, 3])); // true
