function seekDestroy(arr1, arr2) {
  //   return arr1.filter((el) => !arr2.includes(el));

  const obj = {};
  let result = [];
  for (let el of arr2) {
    obj[el] = obj[el] + 1 || 1;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (!obj[arr1[i]]) {
      result.push(arr1[i]);
    }
  }
  return result;
}
console.log(seekDestroy([3, 5, 1, 2, 2], [2, 3, 5]));
