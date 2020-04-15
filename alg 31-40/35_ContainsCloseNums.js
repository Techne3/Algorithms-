/// Given an array of integers nums and an integer k, determine whether there are two distinct indices i and j in the array where nums[i]=nums[j] and the absolute difference between i and j is less than or equal to k

// There are two 2s in nums, and the absolute difference between their position is exactly 3

//// EXAMPLE:
///  for nums = [0,1,2,3,5,2] and k = 3 the output should be TRUE
// ----> there are two 2's in ums and the absolute difference between their positions is exactly 3
//// for nums = [0,1,2,3,5,2] and k = 2  the output should be FALSE
// ----> the absolute difference between the positions of the two 2s is 3, which is more than k

function containsCloseNums(nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        if (nums[i] === nums[j]) {
          /// math absolute
          if (Math.abs(i - j) <= k) {
            return true;
          }
        }
      }
    }
  }
  return false;
}

console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 3));
console.log(containsCloseNums([0, 1, 2, 3, 5, 2], 2));
