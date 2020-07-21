/// Given arroy of integers, remove each kth element from it
/// EXAMPLE:
//// for inputArray =[1,2,3,4,5,6,7,8,9,10] and k=3
//// output should be extractEachKth(inputArray,k) = [1,2,4,5,7,8,10]

function extractEachKth(inputArray, k) {
  return inputArray.filter((x) => x % k !== 0);
}
console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
