// Call two arms equally strong if the heaviest weight they each are able to lift are equal
// Call two people equally strong if their strongest arms are equally strong (the strongest arm can be both the right and the left), and so are their weakest arms
// Given your  and your friend's arms lifting capabilities find out if you two are equally strong

// Example
// for yourLeft = 10, yourRight = 15, friendsLeft= 15 and friends Right = 10
//////// output should be areEquallyStrong(yourLeft,yourRight,friendsLeft,friendsRight)=true

// for yourLeft = 15, yourRight = 10, friendsLeft= 15 and friends Right = 10
///////// output should be areEquallyStrong(yourLeft,yourRight,friendsLeft,friendsRight)=true

// for yourLeft = 15, yourRight = 10, friendsLeft= 15 and friends Right = 9
/////  output should be areEquallyStrong(yourLeft,yourRight,friendsLeft,friendsRight)=false

const areEquallyStrong = (yourLeft, yourRight, friendsLeft, friendsRight) => {
  const yourWeakest = yourLeft <= yourRight ? yourLeft : yourRight;
  const yourStrongest = yourLeft >= yourRight ? yourLeft : yourRight;
  const friendsWeakest =
    friendsLeft <= friendsRight ? friendsLeft : friendsRight;
  const friendsStrongest =
    friendsLeft >= friendsRight ? friendsLeft : friendsRight;

  return yourStrongest === friendsStrongest && yourWeakest === friendsWeakest;
};
console.log(areEquallyStrong(10, 15, 15, 10));
console.log(areEquallyStrong(10, 10, 15, 10));
console.log(areEquallyStrong(10, 15, 15, 9));
