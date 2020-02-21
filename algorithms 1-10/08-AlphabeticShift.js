// Given a string replace each of its characters by the next one in the English alphabet (z would be replaced by a)
// Example
//  for inputString = 'crazy' the output should be alphabeticShift(inputString) = 'dsbaz'

// hints
// split()
// unshift()
// join()

function alphabeticShift(inputString) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  let inputShifted = inputString.split("");

  for (let i = 0; i < inputShifted.length; i++) {
    let index = 0;

    if (inputShifted[i] !== "z") {
      index = alphabet.indexOf(inputShifted[i]) + 1;
    }
    inputShifted[i] = alphabet[index];
  }
  return inputShifted.join("");
}

console.log(alphabeticShift("crazy"));

function alphabeticShifts(inputString) {
  const alphabets = {
    a: "b",
    b: "c",
    c: "d",
    d: "e",
    e: "f",
    f: "g",
    g: "h",
    h: "i",
    i: "j",
    j: "k",
    l: "m",
    m: "n",
    n: "o",
    o: "p",
    p: "q",
    q: "r",
    r: "s",
    s: "t",
    t: "u",
    u: "v",
    v: "w",
    w: "x",
    x: "y",
    y: "z",
    z: "a"
  };
  let inputShifted = inputString.split("");

  for (let i = 0; i < inputShifted.length; i++) {
    let index = 0;

    inputShifted[i] = alphabets[inputShifted[i]];
  }
  return inputShifted.join("");
}

console.log(alphabeticShifts("crazy"));
