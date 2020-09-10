function largestOfFour(nums) {
  const highestNum = [];
  let largest = 0;

  for (let numberGroup of nums) {
    for (let number of numberGroup) {
      largest = largest < number ? number : largest;
    }
    highestNum.push(largest);
  }
  return highestNum;
}

console.log(
  largestOfFour([
    [4, 5, 1, 3],
    [12, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ])
);
