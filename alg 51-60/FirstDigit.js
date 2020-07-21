function FistDigit(inputString) {
  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  //   const chars = inputString.split("");

  for (let i = 0; i < inputString.length; i++) {
    if (digits.includes(inputString[i])) {
      return inputString[i];
    }
  }
}

console.log(FistDigit("var_1__Int"));
console.log(FistDigit("meo2ow"));
