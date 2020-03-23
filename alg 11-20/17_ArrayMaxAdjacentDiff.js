//  Given an array of integers, find the max absolute difference between any two adjacent elements

// EXAMPLE:
// For  inputArray=[2,4,1,0] the output should be arrayMaximalAdjacentDifference(inputArray)=3

// hint
//  Math.abs()

function arrayMaximalAdjacentDifference(inputArray) {
  let maxDiff = Math.abs(inputArray[0] - inputArray[1]);
  for (let i = 0; i < inputArray.length; i++) {
    let absoluteDiff = Math.abs(inputArray[i - 1] - inputArray[i]);

    //  maxDiff = absoluteDiff > maxDiff ? absoluteDiff : maxDiff

    if (absoluteDiff > maxDiff) {
      maxDiff = absoluteDiff;
    }
  }

  return maxDiff;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));
console.log(arrayMaximalAdjacentDifference([0, 14, 1, 10]));
