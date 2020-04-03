// Write a function that splits an array (first argument) into groups the length of size(second argument) and returns them as a two-dimensional array

/// EXAMPLE:
/// chunkyMonkey(['a','b','c','d'],2) should return [['a','b'], ['c','d']]
/// chunkyMonkey([0,1,2,3,4,5],4) should return [[0,1,2,3], [4,5]]

// Hint
// slice()

function chunkyMonkey(arr, sizes) {
  const nested = [];
  let count = 0;

  while (count < arr.length) {
    nested.push(arr.slice(count, (count += sizes)));
  }

  return nested;
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));
