function houseNumbSum(inputArr) {
  let total = 0;

  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] === 0) {
      return total;
    }
    total += inputArr[i];
  }
  return total;
}

console.log(houseNumbSum([5, 1, 2, 3, 0, 1, 5, 2, 6]));
