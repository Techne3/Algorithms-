function FirstDuplicate(a) {
  const firstDup = {};

  for (let num of a) {
    if (firstDup.hasOwnProperty(num)) {
      return num;
    }
    firstDup[num] = num;
  }
  return -1;
}

console.log(FirstDuplicate([2, 1, 5, 3, 3, 2]));
console.log(FirstDuplicate([1, 2, 3, 4, 5]));
