function intToStingFixed(number, width) {
  let stringNum = number.toString();
  const numberWidth = stringNum.length;
  const widthDiff = width - numberWidth;
  console.log(widthDiff);

  if (numberWidth < width) {
    let padStart = "";

    for (let i = 0; i < widthDiff; i++) {
      padStart += "0";
    }
    return padStart.concat(stringNum);
  }
  if (width < numberWidth) {
    return stringNum.slice(width);
  }
  return stringNum;
}

console.log(intToStingFixed(1234, 2));
console.log(intToStingFixed(1234, 4));
console.log(intToStingFixed(1234, 6));
