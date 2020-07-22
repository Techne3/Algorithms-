function GrowingPlant(upSpeed, downSpeed, desiredHeight) {
  let day = 0;
  let totalHeight = 0;

  while (totalHeight < desiredHeight) {
    day++;
    totalHeight += upSpeed;

    if (totalHeight < desiredHeight) {
      totalHeight -= downSpeed;
    }
  }

  return day;
}

console.log(GrowingPlant(100, 10, 910));
