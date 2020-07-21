// Check if all digits of the given integer are even

//Example:
// for n = 248622, the output should be evenDigitsOnly(n) = true
/// check to see if every digit in number is even

function evenDigitsOnly(n) {
  const digits = n.toString().split("");
  //   console.log(digits);

  return digits.every((dig) => parseInt(dig) % 2 === 0);
}
console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(248633));
