// Given two cells on the standard chess board, determine whether they have the smae color or not

// EXAMPLE;
//  for cell1 = "A1" and cell2 = "C3" the output should be chessBoardCellColor(cell1,cell2) = true
//  for cell1 = "A1" and cell2 = "H3" the output should be chessBoardCellColor(cell1,cell2) = false

// hint
// parseInt()

function chessBoardCellColor(cell1, cell2) {
  const board = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8
  };

  const total1 = (board[cell1[0]] + parseInt(cell1[1])) % 2;
  const total2 = (board[cell2[0]] + parseInt(cell2[1])) % 2;

  return total1 === total2;
}

console.log(chessBoardCellColor("A1", "C3"));
console.log(chessBoardCellColor("A1", "H3"));
