function properNoun(noun) {
  //   let first = noun.charAt(0).toUpperCase();
  //   let rest = noun.charAt();
  //   console.log(rest)

  const firstChar = noun[0].toUpperCase();
  const restOfWord = noun.slice(1, noun.length).toLowerCase();

  return firstChar + restOfWord;
}
console.log(properNoun("pAris"));
console.log(properNoun("John"));
