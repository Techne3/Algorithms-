// function FirstNonRepeatChar(s) {
//   const chars = s.split("");
//   let duplicate = {};
//   let answer = "_";
//   let indexAnswer = Number.MAX_SAFE_INTEGER;

//   chars.forEach((element, index) => {
//     if (!duplicate.hasOwnProperty(element)) {
//       duplicate[element] = {
//         count: 1,
//         index,
//       };
//     } else {
//       duplicate[element].count++;
//       duplicate[element].index = index;
//     }
//   });

//   for (const key in duplicate) {
//     if (duplicate[key].count === 1 && duplicate[key].index < indexAnswer) {
//       answer = key;
//       indexAnswer = duplicate[key].index;
//     }
//   }
//   return answer;
// }

function firstNotRepeatingChar(s) {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i && s.lastIndexOf(s[i]) === i) {
      console.log(s[i]);
      return s[i];
    }
  }
  return "_";
}

console.log(firstNotRepeatingChar("abacabad"));
console.log(firstNotRepeatingChar("aabb"));
