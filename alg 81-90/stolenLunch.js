function stolenLunch(msg) {
  const chars = msg.split("");

  let resultMessage = "";

  let map = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    4: "e",
    5: "f",
    6: "g",
    7: "h",
    8: "i",
    9: "j",
    a: "0",
    b: "1",
    c: "2",
    d: "3",
    e: "4",
    f: "5",
    g: "6",
    h: "7",
    i: "8",
    j: "9",
  };

  for (let char of chars) {
    map.hasOwnProperty(char)
      ? (resultMessage += map[char])
      : (resultMessage += char);
  }

  // return msg.split('').map(element => { return (dictionary[element]) ? dictionary[element] : element; }).join('');

  return resultMessage;
}

console.log(stolenLunch("you'll n4v4r 6u4ss 8t: cdja"));
