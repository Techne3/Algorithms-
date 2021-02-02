function sumAltPrime(num) {
  let primesTotal = 0;

  for (let i = 2; i < num; i++) {
    for (let j = 2; j <= i; j++) {
      if (i === j) {
        primesTotal += i;
      }
      if (i % j === 0) {
        break;
      }
    }
  }

  return primesTotal;
}

console.log(sumAltPrime(10));
console.log(sumAltPrime(977));
