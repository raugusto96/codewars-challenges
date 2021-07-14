// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.
// Examples

// divisors(4)  = 3  // 1, 2, 4
// divisors(5)  = 2  // 1, 5
// divisors(12) = 6  // 1, 2, 3, 4, 6, 12
// divisors(30) = 8  // 1, 2, 3, 5, 6, 10, 15, 30

// Code bellow

const getDivisorsCnt = n => {
  let divisor = 0;
  for (let index = n; index > 0; index -= 1) {
    if (n % index === 0) divisor += 1;
  }
  return divisor;
}

console.log(getDivisorsCnt(1));
console.log(getDivisorsCnt(10));
console.log(getDivisorsCnt(11));
console.log(getDivisorsCnt(54));