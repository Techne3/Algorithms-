function switchLight(a) {
  let originalLights = [...a];

  for (let i = 0; i < a.length; i++) {
    if (a[i] === 1) {
      originalLights = swapLights(originalLights, i);
    }
  }
  return originalLights;
}

function swapLights(lights, currentIndex) {
  for (let i = 0; i < currentIndex; i++) {
    lights[i] = lights[i] === 1 ? 0 : 1;
  }

  lights[currentIndex] = 0;

  return lights;
}

console.log(switchLight([1, 1, 1, 1]));
console.log(switchLight([0, 0]));
