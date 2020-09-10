function HTMLTag(startTag) {
  const splitString = startTag.split(" ");
  console.log(splitString);
  const splitTag = splitString[0].split("");
  let endTag = "</";
  for (let i = 1; i < splitTag.length; i++) {
    endTag += splitTag[i];
  }
  endTag = endTag[endTag.length - 1] === ">" ? endTag : (endTag += ">");
  return endTag;
}
console.log(HTMLTag("<button type='button' disabled>"));
console.log(HTMLTag("<i>"));
