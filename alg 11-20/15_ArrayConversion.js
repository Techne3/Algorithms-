// Given an array of 2k integers(for some integer k), preform the following operations until the array contains only one element

// On the 1st 3rd 5th, etc iterations(1-based) replace each pair of consecutive elements with their sums
// On the 2nd 4th, 6th etc iterations replace each pair of consecutive elements with their product.
/// After the algorithm has finished, there will be a single element left in the array
//// return that element

// EXAMPLE:
//// For inputArray = [1,2,3,4,5,6,7,8] the output should be arrayConversion(inputArray) = 186
/// we have [1,2,3,4,5,6,7,8] => [3,7,11,15] => [21,165] => [186] so the answer is 186

/// 1+2 = 3 , 3+4 = 7   5+6 = 11  7+8=15  added array === [3,7,11,15]
//////// addedArray then you multiply 3*7 = 21  11*15 = 186

function arrayConversion(inputArray) {
  let isOdd = true;

  while (inputArray.length !== 1) {
    inputArray = sumProduct(inputArray, isOdd);
    isOdd = !isOdd;
  }
  // return the first number of the arrayConversion once completed so we only have one value. 186
  return inputArray[0];
}

function sumProduct(nums, isOdd) {
  let sumProducts = [];
  if (isOdd) {
    // loops through every 2 numbers in the array
    // add the number 1st and 2nd number together
    for (let i = 0; i < nums.length; i += 2) {
      sumProducts.push(nums[i] + nums[i + 1]);
    }
  } else {
    for (let i = 0; i < nums.length; i += 2) {
      sumProducts.push(nums[i] * nums[i + 1]);
    }
  }
  return sumProducts;
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));

console.log(sumProduct([1, 2, 3, 4, 5, 6, 7, 8]));
