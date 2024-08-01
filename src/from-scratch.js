// Recursion Problem Set: Coding Exercises

// Calculate and return the total sum using recursive approach
const sum = (arr) => (arr.length === 0 ? 0 : arr.pop() + sum(arr));

// Reverse string using recursive approach
const reverse = (str) => {
  if (str === "") {
    return "";
  } else {
    return reverse(str.substr(1)) + str.charAt(0);
  }
};

// Iterative approach to solving the fibonacci problem
const fibIter = (n) => {};

// Recursive fibonacci
const fibRec = (n) => {};

// Return the index of target in arr, or -1 if not found using recursion
const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {
  const mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) return mid;
  if (arr[mid] > target) binarySearch(arr, target, start, (end = mid - 1));
  if (arr[mid] < target) binarySearch(arr, target, (start = mid + 1), end);
  if (start > end) return -1;
};

module.exports = { sum, reverse, fibRec, fibIter, binarySearch };
