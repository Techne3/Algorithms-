// Given a string, check if it can become a palindrome through a case change of some(possibly,none) leetters

/// TODO: Example
/// for inputSting="AaBaa" the output should be ç = true.

// 'aabaa' is a palindrome as well as "AABAA"

// for inputSting ='abac' the output should be ç = false
// All the stings which can be obtained via changing case of some group of letters, ie, 'abac', "Abac","aBAc" are not palindromes.

// hints
// join()
// reverse()
// toLowerCase()
// split()

function isCaseInsensitivePalindrome(inputString) {
  const originalLowerCase = inputString.toLowerCase();
  const reverseWord = originalLowerCase
    .split("")
    .reverse()
    .join("");

  return originalLowerCase === reverseWord;
}

console.log(isCaseInsensitivePalindrome("AaBaa"));
console.log(isCaseInsensitivePalindrome("abac"));
