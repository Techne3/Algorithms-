// You are given the stirng s. Your friend just asked you if its possible to change the string from s to a string t
// by removing some characters from it.

// Example:
/// for s = 'ceoydefthf5h5yts   and t= ' codefights' the output should be true

function convertString(s, t) {
  let word = "";
  let tIndex = 0;
  const sChars = s.split(" ");

  for (let i = 0; i < s.length; i++) {
    if (s[i] === t[tIndex]) {
      word = word.concat(s[i]);
      tIndex++;

      if (word === t) {
        return true;
      }
    }
  }

  return false;
}

console.log(convertString("ceoydefthigf5h5yts", "codefigths"));
console.log(convertString("cast", "cats"));
