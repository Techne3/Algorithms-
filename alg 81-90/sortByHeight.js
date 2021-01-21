function sbh(arr) {
  let arr2 = arr
    .filter((el) => {
      if (el !== -1) {
        return el;
      }
    })
    .sort((num1, num2) => num1 - num2);
  console.log(arr2);

  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      arr[i] = arr2[index];
      index++;
    }
  }

  return arr;
}

console.log(sbh([-1, 150, 190, 170, -1, -1, 160, 180]));
