function makeArray(num) {
  const sorted = num.sort((a, b) => a - b);
  let max = Math.max(...sorted);
  let min = Math.min(...sorted);
  console.log(sorted);
  let result = [];
  for (let i = min; i < max; i++) {
    if (num.indexOf(i) === -1) {
      result.push(i);
    }
  }
  return result;
}
console.log(makeArray([6, 2, 3, 8]));
