const array = [1, 5, 4, 8, 12, 5, 9, 3, 4, 5, 8, 7];
let count = 0;
function lineSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (array[i] === item) {
      return i;
    }
  }
  return null;
}

console.log(lineSearch(array, 8)); //return elem index
console.log(array[3]);
console.log("count = " + count);
