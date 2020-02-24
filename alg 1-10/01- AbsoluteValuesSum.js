//  given a sorted array of integers a, find an integer x from a such that the value of is the smallest possible
// if there are several possible answers, output the smallest one

// example //
// For a  = [2,4,7]   the output should be absoluteValuesSumMinimization(a)=4
// For a = [2,4,7,6] the output should be (a)=4

// let a = [];

function absoluteValuesSumMinimization(a) {
  const isEven = a.length % 2 === 0;
  return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
}

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));
