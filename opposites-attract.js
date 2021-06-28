// Sem ternary operator
// const lovefunc = (flower1, flower2) => {
//   if (flower1 % 2 === 1 && flower2 % 2 === 0 || flower1 % 2 === 0 && flower2 % 2 === 1) return true;
//   return false;
// }

// Com ternary operator
const lovefunc = (flower1, flower2) => flower1 % 2 === 1 && flower2 % 2 === 0 || flower1 % 2 === 0 && flower2 % 2 === 1 ? true : false;


console.log(lovefunc(1,4));
console.log(lovefunc(2,2));
console.log(lovefunc(0,1));
console.log(lovefunc(0,0));
