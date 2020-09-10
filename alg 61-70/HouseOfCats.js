function houseOfCats(legs) {
  let result = [];

  while (legs >= 0) {
    result.unshift(legs / 2);
    legs -= 4;
  }

  return result;
}
console.log(houseOfCats(6));
