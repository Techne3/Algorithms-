// given a sequence of interer as an array, determine whether it is possible to obtain a
// strictly sequence by removing no more than one element from the array.

//EXAMPLE:////
/// For sequence = [1,3,2,1] the output should be almostIncreasingSequence(sequence) = false;
// there is no one element in this array that can be removed in order to get a stricly increasing sequence
// For sequence = [1,3,2] the output should be almostIncreasingSequence(sequence) = true;
// You can remove 3 from the array to get the increasing sequence [1,2]

const almostIncreasingSequence = (sequence) => {
  let count = 0;

  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      count++;
      if (
        sequence[i] <= sequence[i - 2] &&
        sequence[i + 1] <= sequence[i - 1]
      ) {
        return false;
      }
    }
  }

  return count <= 1;
};

console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([1, 3, 2]));
