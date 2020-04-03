// Consider integer from 0 to n - 1 written down along the circle in such a way that the distance between ay two neighboring numbers is equal (note that 0 and n -1 are neighbors too)
// Given n and firstNumber, find the number which is written in the radially opposite position to firstNumber

// EXAMPLE:
// for n = 10 and firstNumber = 2 the output should be circleOfNumbers( n, firstNumber) = 7

function circleOfNumbers(n, firstNumber) {
  const numArray = [];
  const halfway = n / 2;

  for (let i = 0; i < n; i++) {
    numArray.push(i);
  }
  if (firstNumber < halfway) {
    return numArray[firstNumber + halfway];
  }

  return numArray[firstNumber - halfway];
}

console.log(circleOfNumbers(10, 2));
console.log(circleOfNumbers(8, 2));
console.log(circleOfNumbers(4, 1));
