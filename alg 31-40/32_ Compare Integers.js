// compare two integers given as Strings
// EXAMPLE:
//// for a = 12 and b = 13, the output should be compareIntegers(a,b) = less
//// for a = 875 and b = 799, the output should be compareIntegers(a,b) = greater
//// for a = 1000 and b = 1000, the output should be compareIntegers(a,b) = equal

// hints : parseInt()

function compareIntegers(a, b) {
  return parseInt(a) > parseInt(b)
    ? "greater"
    : parseInt(a) < parseInt(b)
    ? "less"
    : "equal";
}

console.log(compareIntegers(12, 13));
console.log(compareIntegers(875, 799));
console.log(compareIntegers(1200, 1200));
