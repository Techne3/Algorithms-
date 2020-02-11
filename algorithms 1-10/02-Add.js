// 1.write a function that that returns the sum of two numbers
// 2. write a function that returns the sum of all numbers regardless of # of params

//example for param 1 = 1 and param2 = 2 the output should be add(param1,param2) = 3

function add(param1, param2) {
  return param1 + param2;
}

console.log(add(1, 2));
console.log(add(3, 2));

function add2(...param1) {
  let total = 0;
  param1.forEach(num => {
    total += num;
  });
  return total;
}

console.log(add2(3, 3, 3, 3));
console.log(add2(3, 5, 5, 10));
