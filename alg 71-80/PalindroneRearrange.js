function PR(inputStr) {
  let chars = inputStr.split("");
  let charCount = {};
  let oddCount = 0;

  for (let i = 0; i < chars.length; i++) {
    if (charCount.hasOwnProperty(chars[i])) {
      charCount[chars[i]]++;
    } else {
      charCount[chars[i]] = 1;
    }
  }

  for (let key in charCount) {
    if (charCount[key] % 2 !== 0) {
      oddCount++;
    }
  }
  console.log(oddCount);
  console.log(charCount);
}

console.log(PR("aabb"));
console.log(PR("aabbac"));
//////////////////////
function palindrome(a) {
  // let word = str.split("").sort();
  // let obj = {};
  // let uniqueValues = 0;

  // for (let i = 0; i < word.length; i++) {
  //   if (obj.hasOwnProperty(word[i])) {
  //     obj[word[i]]++;
  //   } else {
  //     obj[word[i]] = 1;
  //   }
  // }
  // for (let key in obj) {
  //   if (obj[key] % 2 !== 0) {
  //     uniqueValues++;
  //   }
  // }

  // console.log(obj);
  // console.log(uniqueValues >0);
  let nSet = new Set();
  let result = [];

  for (let i = 0; i < a.length; i++) {
    if (nSet.has(a[i])) {
      result.push(a[i]);
    } else {
      nSet.add(a[i]);
    }
  }

  return result.length ? result[0] : -1;
}
console.log(palindrome("abbccc"));

// function LS(str) {
//   let result = [];
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === str[i].toLowerCase()) {
//       result.push(str[i].charCodeAt() - 97 + 1);
//     } else {
//       result.push(str[i].charCodeAt() - 65 + 1);
//     }
//   }
//   return result;
// }

// console.log(LS("abcdABCDZz"))
