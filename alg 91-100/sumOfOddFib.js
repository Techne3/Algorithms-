const sumAllOddFib = (num) => {
  let result = 0;
  let prev = 0;
  let current = 1;

  while (current <= num) {
    if (current % 2 !== 0) {
      result += current;
    }

    const nextCurrent = current + prev;
    prev = current;
    current = nextCurrent;
  }

  return result;
};
console.log(sumAllOddFib(10));
console.log(sumAllOddFib(1000));

function SAF(num) {
  let res = [1, 2];
  let filtered = [];
  for (let i = 2; i <= num; i++) {
    res.push(res[i - 2] + res[i - 1]);
  }

  filtered = res.filter((el) => el <= num && el % 2 !== 0);
  return filtered.reduce((acc, b) => acc + b);
}

console.log(SAF(1000));
