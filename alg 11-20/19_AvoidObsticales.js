// You are given an arrray of integers representing coordinates of obsticals sistuated on a stright line
// Assume that you are jumping from the piont with coordinate ) to the right. You are allowed only to make
// jumps of the smae length represented by some integer
// Find the minimal length of the the jump enough to avoid all the obstacles

///// EXAMPLE;
// For input [5,3,6,7,9 ] the output should be avoidObstacles(inputArray) = 4

// Hint  sort()
// // every()
function avoidObstacles(inputArray) {
  inputArray = inputArray.sort((a, b) => a - b);
  // last value of the input array === largest value
  const largestArrayVal = inputArray[inputArray.length - 1];

  for (let i = 1; i <= largestArrayVal + 1; i++) {
    if (inputArray.every(element => element % i !== 0)) {
      return i;
    }
  }
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));
