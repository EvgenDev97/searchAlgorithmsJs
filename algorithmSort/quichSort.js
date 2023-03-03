//the most efficient
const arr = [1, 3, 4, 7, 10, 5, 6, -7, 0, 4];
let count = 0;
function quichSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array[pivotIndex];
  let less = [];
  let greate = [];
  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (i === pivotIndex) {
      continue;
    }
    if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      greate.push(array[i]);
    }
  }
  return [...quichSort(less), pivot, ...quichSort(greate)];
}

console.log(quichSort(arr));
console.log(count);
