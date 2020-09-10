function incorrectPass(pass, attempts) {
  let count = 0;
  for (let i = 0; i < attempts.length; i++) {
    if (attempts[i] === pass) {
      count = 0;
    } else {
      count++;
    }
  }
  return count <= 10;
}
console.log(
  incorrectPass("1111", [
    "1111",
    "4444",
    "9999",
    "3333",
    "8888",
    "2222",
    "7777",
    "0000",
    "6666",
    "7285",
    "5555",
    "1111",
  ])
);
