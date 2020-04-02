//  Given the string, check if it is a palindrome

/// EXAMPLE:
/// for inputSting = 'aabaa', the output should be checkPalindrome(inputString) = true
/// for inputSting = 'abac', the output should be checkPalindrome(inputString) = false
/// for inputSting = 'a', the output should be checkPalindrome(inputString) = true

function checkPalindrome(inputString) {
  const originalWord = inputString.toLowerCase();

  const reverseWord = originalWord
    .split("")
    .reverse()
    .join("");

  return originalWord === reverseWord;
}

console.log(checkPalindrome("aabaa"));
console.log(checkPalindrome("abc"));
console.log(checkPalindrome("abaaba"));
