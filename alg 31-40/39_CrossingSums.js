// Given a rectangluar matrix and integers a and b
// conisder the union of the ath row and bth (both 0-based) column of the matrix
// (i.e all cells that beldong either to arth row or to the bth column, or to both)
// Return sum of all elements of the union.

// Example:
///  matrix =[[1,1,1,1], [2,2,2,2], [3,3,3,3]] a = 1 and b = 3 the output should be
// crossingSum(matrix, a,b) = 12
////// (2+2+2+2) +(1+3) = 12

function crossingSum(matrix, a, b) {
  const columnTotal = matrix[a].reduce((a, b) => a + b);
  console.log(columnTotal);
  let rowTotal = 0;
  for (let i = 0; i < matrix.length; i++) {
    rowTotal += i !== a ? matrix[i][b] : 0;
  }

  return columnTotal + rowTotal;
}

console.log(
  crossingSum(
    [
      [1, 1, 1, 1],
      [2, 2, 2, 2],
      [3, 3, 3, 3],
    ],
    1,
    3
  )
);
