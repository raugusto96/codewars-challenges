// A Nice array is defined to be an array where for every value n in the array,
// there is also an element n - 1 or n + 1 in the array.

function isNice(arr){
  if (arr.length === 0) return false;
  for (let index = 0; index < arr.length; index += 1) {
    const element = arr[index];
    if (arr.indexOf(element - 1) === -1 && arr.indexOf(element + 1) === -1) return false;
  }
  return true;
}

console.log(isNice([2,10,9,3]));
console.log(isNice([3,4,5,7]));