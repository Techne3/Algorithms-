function isTandemRepeat(str) {
  const wordLength = str.length;

  if (wordLength % 2 === 0) {
    const firstHalf = str.slice(0, wordLength / 2);
    const secondHalf = str.slice(wordLength / 2);

    return firstHalf === secondHalf;
  }
  return false;
}
console.log(isTandemRepeat("qqq"));
console.log(isTandemRepeat("tandemtandem"));
