// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

// Return all non-odd values
const noOdds = ( values ) => {
  const newArray = [];
  values.forEach((value) => {
    if (value % 2 === 0) {
      newArray.push(value);
    }
  })
  return newArray;
}

// console.log(noOdds( [0,1] ));
// console.log(noOdds( [0,1,2,3] ));