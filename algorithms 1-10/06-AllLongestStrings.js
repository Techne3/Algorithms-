// Given an array of stinigs, return another array containing all of its longest stings

//  EX:
// for inputArray =['aba', 'aa', 'ad', 'vcd','aba'] the output should be allLongestStings(inputArray =["aba",'vcd','aba'])

function allLongestStings(inputArray) {
  let longestLength = 0;
  let longestWords = [];

  inputArray.forEach(word => {
    if (longestLength < word.length) {
      longestLength = word.length;
    } else {
      longestLength;
    }
    // longestLength = longestLength < word.length ? word.length : longestLength;
  });

  inputArray.forEach(word => {
    if (word.length === longestLength) {
      longestWords.push(word);
    }
  });

  return longestWords;
}

console.log(allLongestStings(["abac", "aa", "ad", "vcd", "abac"]));
