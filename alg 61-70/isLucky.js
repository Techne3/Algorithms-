function isLucky(num) {
  let numArr = Array.from(String(num), Number);

  let first = numArr.slice(0, numArr.length / 2).reduce((a, b) => a + b);
  let last = numArr.slice(numArr.length / 2).reduce((a, b) => a + b);

  return first === last;

  //   const luckyN = num.toString();
  //   const half = luckyN.length / 2;

  //   const firstHalf = getTotal(luckyN.substring(0, half));
  //   const secondHalf = getTotal(luckyN.substring(half));
  //   console.log(firstHalf)
  //   console.log(secondHalf)

  //   function getTotal(num) {
  //     return num
  //       .substring(0, half)
  //       .split("")
  //       .map((char) => parseInt(char))
  //     //   .reduce((a, b) => a + b);
  //   }

  //   return firstHalf === secondHalf;
}

console.log(isLucky(1230));
// console.log(isLucky(1231))
