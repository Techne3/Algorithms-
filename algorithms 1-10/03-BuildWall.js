// given a rectangular matrix of characters, add a border of asterisks(*)to it

//example  picture =[*******,
//                    'abc,
//                    'ded'
//                  *******]
//

function addBorder(picture) {
  const wall = "*".repeat(picture[0].length + 2);

  picture.unshift(wall);
  picture.push(wall);

  for (let i = 1; i < picture.length - 1; i++) {
    picture[i] = "*".concat(picture[i], "*");
  }

  return picture;
}
console.log(addBorder(["abc", "ded"]));

/////// FIZZBUZZ////////
var output = [];

function fizzBuzz() {
  for (var count = 1; count < 101; count++) {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push("fizzBuzz");
    } else if (count % 3 === 0) {
      output.push("Fizz");
    } else if (count % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(count);
    }
  }
  console.log(output);
}
console.log(fizzBuzz());
////////////////////////////

let test = [];
function tester(num) {
  for (i = 0; i < num; i++) {
    test.push(i);
    console.log(test);
  }
}

tester(20);
