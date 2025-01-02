// Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

// If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

// If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

// If the total of both even and odd numbers are identical return: "Even and Odd are the same"

function evenOrOdd(str) {
  const numbers = str.split('');
  let sumEven = 0;
  let sumOdd = 0;
  let even = 'Even is greater than Odd';
  let odd = 'Odd is greater than Even';
  let same = 'Even and Odd are the same';
  numbers.forEach((number) => {
    if (number % 2 === 0) sumEven += parseInt(number);
    else sumOdd += parseInt(number);
  })
  if (sumEven > sumOdd) return even;
  if (sumEven < sumOdd) return odd;
  return same;
}

console.log(evenOrOdd('12'));
console.log(evenOrOdd('123'));
console.log(evenOrOdd('112'));