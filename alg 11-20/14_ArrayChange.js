// You are given an array of integers. On each move you are allowed to increase exactly one of its elements by one. Find the minimal number of moves required to obtain a strictly increasing sequence from the input

// example:
// For inputArray = [1,1,1] the output shoulbe be arrayChange(inputArray) =3
// solved should be [1,2,3]

// Guarantee constants  3< inputArray.length < 105
// -105 < inputArray[i] < 105

// The minimal number of moves needed to obtain a strickly increasing sequence from inputArray. It's
// guaranteed that for the given test cases the answers will always fit signed 32-bit integer type

function arrayChange(inputArray) {
  let count = 0;
  for (let i = 0; i < inputArray.length; i++) {
    // check to see if the following number is > or (larger) then the current number
    if (inputArray[i] >= inputArray[i + 1]) {
      const difference = inputArray[i] + 1 - inputArray[i + 1];
      // reassign the next value in the array to the current value plus one
      // meaning that a 1 will become 2  or 2 become 3 and so on...
      inputArray[i + 1] = inputArray[i] + 1;
      count += difference;
    }
  }
  return count;
}

console.log(arrayChange([1, 2, 2]));
console.log(arrayChange([1, 1, 1]));
console.log(arrayChange([3, 2, 1]));
