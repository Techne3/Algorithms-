function sbl(inputArr) {
  return inputArr.sort((a, b) => a.length - b.length);
}
console.log(sbl(["", "aaa", "A", "zz"]));
