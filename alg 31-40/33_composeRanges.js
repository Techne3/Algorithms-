// Given a sorted integers array that does not contain any duplicates, return a
// summary of the number ranges it contains.

//// EXAMPLE:
// for nums = [-1,0,1,2,6,7,9] the output should be composeRange(nums) = [-1 >2,  6>7, 9]

/// Hints
/// Push()

function composeRange(arr) {
  const ranges = [];

  for (let i = 0; i < arr.length; ) {
    const first = arr[i];
    let last,
      j = 1;

    while (first + j === arr[j + i]) {
      last = arr[j + i];
      j++;
    }
    ranges.push(last ? `${first}->${last}` : first);
    i += j;
  }
  return ranges;
}

console.log(composeRange([-1, 0, 1, 2, 6, 7, 9, 8, 10, 11]));
