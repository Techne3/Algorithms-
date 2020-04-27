// Given a stirng, find the number of different characters in it

/// EXAMPLE:
/// for s ='cabca', the output should be differentSymbolsNaive(s) =3
/// there are 3 different characters a,b,c

// function differentSymbolsNaive(s) {
//   const uniqueChars = [];
//   const inputChars = s.split("");

//   inputChars.forEach((char) => {
//     if (!uniqueChars.includes(char)) {
//       uniqueChars.push(char);
//     }
//   });

//   return uniqueChars.length;
// }

// console.log(differentSymbolsNaive("cabca"));

// function differentSymbolsNaive(s) {
//   const uniqueChars = {};
//   const inputChars = s.split("");

//   inputChars.forEach((char) => {
//     uniqueChars[char] = 1;
//   });
//   return Object.keys(uniqueChars).length;
// }

// console.log(differentSymbolsNaive("cabca"));
function differentSymbolsNaive(s) {
  const uniqueChars = new Set();
  const inputChars = s.split("");
  console.log(inputChars);

  inputChars.forEach((char) => {
    uniqueChars.add(char);
  });

  return uniqueChars.size;
}

console.log(differentSymbolsNaive("cabca"));
