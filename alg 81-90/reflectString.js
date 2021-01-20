function reflectString(str) {
  ////////////////////
  //   const chars = inputString.split("");
  //   const reflectionLetters = { a: "z", b: "y", c: "x", d: "w" };

  //   let reflectedWord = "";

  //   for (let i = 0; i < chars.length; i++) {
  //     reflectedWord += reflectionLetters[chars[i]];
  //   }
  //   return reflectedWord;

  let splitter = str.split("");

  let firstChar = "a".charCodeAt(0);
  let midChar = "m".charCodeAt(0);
  let lastChar = "z".charCodeAt(0);
  let result = [];

  splitter.forEach((char) => {
    let chars = char.charCodeAt(0);
    if (chars <= midChar) {
      result.push(String.fromCharCode(lastChar - (chars - firstChar)));
    } else if (chars >= midChar) {
      result.push(String.fromCharCode(firstChar - (chars - lastChar)));
    }
  });
  return result;
}

console.log(reflectString("abcdmnop"));
