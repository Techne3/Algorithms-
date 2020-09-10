function lateRide(n) {
  const hours = Math.floor(n / 60);
  const minutes = n % 60;
  console.log(minutes);
  console.log(hours);
  const time = hours
    .toString()
    .concat(minutes.toString())
    .split("")
    .map((chars) => +chars);

  return time.reduce((a, b) => a + b);
}

console.log(lateRide(240));
console.log(lateRide(808));
