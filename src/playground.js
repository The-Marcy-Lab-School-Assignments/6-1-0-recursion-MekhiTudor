const binarySearch = (arr, target, start = 0, end = arr.length - 1) => {
  const mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) return mid;
  if (arr[mid] > target) binarySearch(arr, target, start, (end = mid - 1));
  if (arr[mid] < target) binarySearch(arr, target, (start = mid + 1), end);
  return -1;
};

//iterative
// const binarySearch = (arr, target) => {
//     let start = 0, end = arr.length - 1
//     while (start <= end) {
//         const mid = Math.floor((start + end) / 2)
//         if (arr[mid] === target) return mid
//         if (arr[mid] > target) end = mid - 1
//         if (arr[mid] < target) start = mid + 1
//     }
//     return -1
// };
