// Given an array of numbers of votes given to each of the candidates so far, and an integer k equal to the number of voters who haven't cast theeir vote yet, find the number of t candidates who still have a chance to win the election

// The winner of the elcetion must secure striclky more votes than any other candidate4s.

//EXAMPLE:
///  For votes = [2,3,5,2] and k= 3, the output should be electionsWinners(votes,k) = 2
//// The fist candidate got 2 votes. Even if all the remaining 3 candidates vote fore him he will still only 5 votes
//// the second candidate can win if all the remaining candidates ote fore him(3 + 3 = 6 >5)
//// the third candidate can win even if noe of the remaining candidates vote fore him
///  the last candidate can't win no matter what

///// Thus only 2 candidates can win (the second and third) which is the answer

function electionsWinners(votes, k) {
  let inTheRunning = 0;
  const mostVotes = Math.max(...votes);
  const sortedVotes = votes.sort((a, b) => b - a);

  if (sortedVotes[0] !== sortedVotes[1] && k === 0) {
    return 1;
  }

  votes.forEach((voteCount) => {
    if (mostVotes - voteCount < k) {
      inTheRunning++;
    }
  });

  return inTheRunning;
}

console.log(electionsWinners([2, 3, 5, 2], 3));
// console.log(electionsWinners([2, 3, 5, 2], 3));
