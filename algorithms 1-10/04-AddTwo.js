// You ar given a two-digit integer n. REturn the sum of its digits

//ex:
//For n = 29, the output should be addTwoDigit(s) = 11   9+2

function addTwoDigits(n) {
  let nums = n.toString().split("");

  return parseInt(nums[0]) + parseInt(nums[1]);
}

console.log(addTwoDigits(29));

///////// Adding multiple digits /////////
function addMultiDigits(n) {
  let multi = n.toString().split("");

  return multi.reduce((a, b) => {
    return parseInt(a) + parseInt(b);
  });
}

console.log(addMultiDigits(333));
