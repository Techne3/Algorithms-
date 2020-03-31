// Given an array of integers, replace all the occurences of elemToReplace with substitution with subtitutionElem

// EXAMPLE:
// for inputArray = [1,2,1] elemToReplace = 1 and substitutionElme  = 3, the output should be arrayReplace(inputArray, elemToReplace, substitutionElem) = (3,2,3)

function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  inputArray.forEach((element, index) => {
    if (element === elemToReplace) {
      inputArray[index] = substitutionElem;
    }
  });
  return inputArray;
}

console.log(arrayReplace([1, 2, 1], 1, 3));
