function ClosetPair(numbers, sum) {
  let distance = -1;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length - 1; j++) {
      const distanceSum = numbers[i] + numbers[j];
      console.log(distanceSum);
      const absDistance = Math.abs(i - j);
      console.log(absDistance);

      if (sum === distanceSum) {
        if (distance === -1 || absDistance < distance) {
          distance = absDistance;
        }
      }
    }
  }
  return distance;
}

console.log(ClosetPair([1, 0, 2, 4, 3, 0], 5));
