// Given array of integers, find the maximal possible sum of some of its k consecutive elements

/// EXAMPLE:
//for inputArray = [2,3,5,1,6] and k = 2,
// the output should be arrayMaxConsecutiveSum(inputArray, k) = 8
/////  k will be the max amount of numbers that can be added together////////
//////// so if k = 3 we can add 3 numbers in array [1,2,4] which would = 7
// All possible sums of 2 consecutive elements are:
// ----> 2+3 = 5
// ----> 3+5 = 8
// ----> 5+1 = 6
// ----> 1+6 = 7
///// Answer will be 8 since it is the max sum

function arrayMaxConsecutiveSum(inputArray, k) {
  let sum = 0;
  let max = 0;

  //// iterate over k
  for (let i = 0; i < k; i++) {
    sum += inputArray[i];
  }

  max = sum;
  for (let i = k; i < inputArray.length; i++) {
    sum -= inputArray[i - k];
    sum += inputArray[i];
    if (sum > max) {
      max = sum;
    }
  }

  return max;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
