//  All four trainters have solved the task correctly, so  the answer is (3+6+4+5) / 4 = 4.5
// Example:
/// for trainingData = [[3,1],[6,1],[4,1],[5,1]] the output should be companyBotStrategy(trainingData) = 4.5.

/// for trainingData = [[4,1],[4,-1],[0,0],[6,1]]] the output should be companyBotStrategy(trainingData) = 5.0
// only the 1st and 4th trainers (1-based) submitted correct solutions so the answer is (4 +6) /2 = 5.0

function companyBotStrategy(trainingData) {
  let time = 0;
  let correctness = 0;
  trainingData.forEach(data => {
    if (data[1] === 1) {
      time += data[0];
      correctness += data[1];
    }
  });

  return time / correctness || 0;
}

console.log(
  companyBotStrategy([
    [3, 1],
    [6, 1],
    [4, 1],
    [5, 1]
  ])
);
console.log(
  companyBotStrategy([
    [4, 1],
    [4, -1],
    [0, 0],
    [6, 1]
  ])
);
