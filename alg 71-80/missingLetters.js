function missingLetter(str) {
  const alpha = "abcdefghijklmnopqrstuvwxyz".split("");
  const chars = str.split("");

  if (chars[0] !== "a") {
    return undefined;
  }
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] !== alpha[i]) {
      return alpha[i];
    }
  }
}

console.log(missingLetter("abce"));
