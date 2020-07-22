function flattenArray(arr) {
  const oneArr = [];
  flatten(arr);

  function flatten(arr) {
    arr.forEach((el) => {
      if (Array.isArray(el)) {
        flatten(el);
      } else {
        oneArr.push(el);
      }
    });
  }

  return oneArr;
}

console.log(flattenArray([[["a"]], [["b"]]]));
console.log(flattenArray([1, [2], [3, [[4]]]]));
