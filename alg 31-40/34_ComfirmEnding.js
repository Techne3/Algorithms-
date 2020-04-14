// Check if a string(first argument ,str) ends with the given target string(second argument, target)
// This challenage can be solved with the .endsWith() method ,

/// EXAMPLE:
///// confirmEnding("Abstraction", "action") returns true
///// confirmEnding("Open sesame", "pen") returns false

function confirmEnding(str, target) {
  const start = str.length - target.length;

  return str.substr(start, str.length) === target;
}

console.log(confirmEnding("Abstraction", "action"));
console.log(confirmEnding("Open sesame", "pen"));
