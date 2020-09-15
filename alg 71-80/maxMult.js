function maxMult(divisor, bound) {
  let remainder = bound % divisor;
  return bound - remainder;
}
console.log(maxMult(3, 10));
