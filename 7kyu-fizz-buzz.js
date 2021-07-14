// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

//     If the value is a multiple of 3: use the value "Fizz" instead
//     If the value is a multiple of 5: use the value "Buzz" instead
//     If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead

// N will never be less than 1.

// Method calling example:

// fizzbuzz(3) -->  [1, 2, "Fizz"]

// Code bellow
function fizzbuzz(number) {
  let array = [];
  for (let index = 0; index < number; index += 1) {
    if ((index + 1) % 15 === 0) {
      array.push('FizzBuzz');
    } 
    else if ((index + 1) % 5 === 0) {
      array.push('Buzz');
    } else if ((index + 1) % 3 === 0) {
      array.push('Fizz');
    }
    else {
      array.push(index + 1);
    }
  }
  return array;
}

console.log(fizzbuzz(10));
console.log(fizzbuzz(8));
console.log(fizzbuzz(25));
console.log(fizzbuzz(1));
console.log(fizzbuzz(9));
console.log(fizzbuzz(5));