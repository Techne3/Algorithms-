// check whether the given string is a subsequence of the plaintext alphabet

//Example:
// For s = 'effg' or s = 'cdce',  the output should be alphabetSubsequence= false
// for s = 'ace' or s= 'bxz' the output should be alphabetSubsequence = true.
// no duplicates

function alphabetSubsequence(s) {
  const chars = s.split("");
  const charValues = [];

  chars.forEach(char => {
    charValues.push(char.charCodeAt(0));
  });
  console.log(new Set(charValues));
  if (new Set(charValues).size !== charValues.length) {
    return false;
  }
  for (let i = 0; i < charValues.length; i++) {
    if (charValues[i] >= charValues[i + 1]) {
      return false;
    }
  }

  return true;
}

console.log(alphabetSubsequence("zab"));
console.log(alphabetSubsequence("effe"));
console.log(alphabetSubsequence("cdce"));
console.log(alphabetSubsequence("ace"));
console.log(alphabetSubsequence("bxz"));
