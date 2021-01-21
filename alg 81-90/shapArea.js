function shape(n) {
  let area = 1;
  for (let i = 1; i < n; i++) {
    area += 4 * i;
  }
  return area;
}

console.log(shape(2));
