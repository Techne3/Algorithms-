// Given a character, check if it represents an odd digit, an even digit or not a digit at all

// EXAMPLE;
//// for symbol = '5' the output should be characterParity(symbol) = 'odd'
// for symbol = '8' the output should be characterParity(symbol) = 'even'
// for symbol = 'q' the output should be characterParity(symbol) = 'not a digit'

// hint
// isNaN()
// parseInt()

function characterParity(symbol) {
  const result = parseInt(symbol);

  return isNaN(result) ? "not a digit" : result % 2 === 0 ? " even" : "odd";
}

console.log(characterParity("5"));
console.log(characterParity("8"));
console.log(characterParity("q"));
