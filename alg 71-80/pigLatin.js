function pigLatin(str) {
  const letters = str.split("");
  const vowelRegex = /[aeiou]/;
  if (vowelRegex.test(str[0])) {
    return `${str}way`;
  }
  while (true) {
    if (!vowelRegex.test(letters[0])) {
      const firstConst = letters.splice(0, 1);
      letters.push(firstConst);
    } else {
      break;
    }
  }
  str = letters.join("") + "ay";
  return str;
}
console.log(pigLatin("eight"));
console.log(pigLatin("glove"));
