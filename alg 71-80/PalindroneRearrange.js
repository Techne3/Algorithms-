function PR(inputStr) {
  const chars = inputStr.split("");

  const letterObj = {};
  let oddCount = 0;

  for (let i = 0; i < chars.length; i++) {
    if (letterObj.hasOwnProperty(chars[i])) {
      letterObj[chars[i]]++;
    } else {
      letterObj[chars[i]] = 1;
      console.log(letterObj);
    }
  }

  for (let key in letterObj) {
    if (letterObj[key] % 2 !== 0) {
      oddCount++;
    }
  }
  return oddCount > 1 ? false : true;
}

console.log(PR("aabbc"));
// console.log(PR("aabba"));

function LS(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      result.push(str[i].charCodeAt() - 97 + 1);
    } else {
      result.push(str[i].charCodeAt() - 65 + 1);
    }
  }
  return result;
}

console.log(LS("abcdABCDZz"));
