function largestNum(num) {
  //   return "9".repeat(num);
  //   let word = "";
  //   for (let i = 0; i < num; i++) {
  //     word = word.concat("9");
  //   }
  //   return parseInt(word);

  return Number("9".repeat(num));
}
console.log(largestNum(3));
