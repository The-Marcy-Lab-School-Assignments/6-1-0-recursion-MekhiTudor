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
const fibIter = (n) => {
  let sequence = [0, 1];
  for (let i = 2; i <= n; i++) {
    sequence.push(sequence[i - 2] + sequence[i - 1]);
  }
  return sequence[n];
};
console.log(fibIter(1));
// Recursive fibonacci
const fibRec = (n) => {
  if (n < 2) {
    return n;
  }
  return fibRec(n - 1) + fibRec(n - 2);
};

// Return the index of target in arr, or -1 if not found using recursion
const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {
  if (start > end) return -1;
  const mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) return mid;
  if (arr[mid] > target)
    return binarySearch(arr, target, start, (end = mid - 1));

  return binarySearch(arr, target, (start = mid + 1), end);
};

module.exports = { sum, reverse, fibRec, fibIter, binarySearch };
