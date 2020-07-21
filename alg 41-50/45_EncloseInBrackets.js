/// Givnen a string, enclose it in round brackets

/// EXAMPLE:
/// for inputString = 'abacaba' the output should be encloseInBrackets(inputString) =('abacaba')

function encloseInBrackets(inputString) {
  return `( ${inputString} )`;
}
console.log(encloseInBrackets("abaacba"));
