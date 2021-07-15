// Your function takes two arguments:

//     current father's age (years)
//     current age of his son (years)

// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

// your code here
function twiceAsOld(dadYearsOld, sonYearsOld) {
  const twice = dadYearsOld - sonYearsOld * 2;
  return twice < 0 ? twice * (-1) : twice;
}

console.log(twiceAsOld(36, 7));
console.log(twiceAsOld(55, 30));