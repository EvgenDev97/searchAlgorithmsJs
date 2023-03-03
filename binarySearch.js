// it is working faster
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
let count = 0;
function binarySearch(array, item) {
  let start = 0;
  let end = array.length;
  let middle;
  let found = false;
  let position = -1;
  while (found === false && start <= end) {
    count += 1;
    middle = Math.floor((start + end) / 2);
    if (array[middle] === item) {
      found = true;
      position = middle;
      return position;
    }
    if (item < array[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return position;
}
console.log(binarySearch(array, 12));
console.log(count);

function recursionBinartSeatch(array, item, start, end) {
  let middle = Math.floor((start + end) / 2);
  if (item === array[middle]) {
    count += 1;
    return middle;
  }
  if (item < array[middle]) {
    return recursionBinartSeatch(array, item, 0, middle - 1);
  } else {
    return recursionBinartSeatch(array, item, middle + 1, end);
  }
}
console.log(recursionBinartSeatch(array, 12, 0, array.length));
console.log(count);
