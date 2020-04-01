//  Given the prosition of a white bishop abna a black pawn on the standard chess board, determine  whether
// the bishphop can capture the pawn in one move
// the bishop is distance for each move but is limited to diag movements.

////////EXAMPLE:
/// for bishop = 'a ' and pawn = 'c3'  the output should be bishopAndPawn(bishop,pawn) = true

function bishopAndPawn(bishop, pawn) {
  const board = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8
  };

  const bishopX = board[bishop[0]];
  const bishopY = parseInt[bishop[1]];

  const pawnX = board[pawn[0]];
  const pawnY = parseInt[pawn[1]];

  if (
    bishopX + bishopY === pawnY + pawnX ||
    bishopX + pawnY === pawnX + bishopY
  ) {
    return false;
  }
  return true;
}

console.log(bishopAndPawn("a1", "c3"));
