// Given an array of integers, find the pair of adjacent elemets that has the largest product and return that product

//ex
// For inputArray = [3,6,-2,-5, 7,3], the output should be adjacentProduct(inputArray)=21
// 7 and 3 produce the largest product

function adjacentElementsProduct(inputArray) {
  // initialize the first two items in array and multiply them
  let largestProduct = inputArray[0] * inputArray[1];

  //   Since there is the last number wont have a number to the right we need to do the length -1
  for (let i = 1; i < inputArray.length - 1; i++) {
    const product = inputArray[i] * inputArray[i + 1];
    // console.log(product);
    if (largestProduct < product) {
      largestProduct = product;
    } else {
      largestProduct;
    }
    // largestProduct = largestProduct < product ? product : largestProduct;
  }
  return largestProduct;
}

console.log(adjacentElementsProduct([3, 1, -2, -5, 4, 6, 3]));
console.log(adjacentElementsProduct([3, 4, 5, 1]));

///////////////Add all the adjacent numbers in array//////
let addedNums = [];
function addAdjacent(numArray) {
  for (let i = 0; i < numArray.length - 1; i++) {
    const added = numArray[i] + numArray[i + 1];
    console.log(added);
    addedNums.push(added);
  }
}
addAdjacent([1, 2, 3, 4]);
// console.log(addAdjacent([1, 2, 3, 4]));
console.log(addedNums);
