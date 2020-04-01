// Lst night you had to study, but decided to party instead. Now there is a black and white photo of you that is about to go viral. You cannot let this ruin you reputation, so you want to apply box blur algorithm to the photo to hide its content.
// The algo works as follows each pixel x in the resulting image has a value equal to the average value of th einput image pixesls values from 3 x 3 square with the center at x. All pixels at the edges are cropped as pixel's value is an integer, all fractions should be be rounded down

// EXAMPLE:
///// for image=[[1,1,1], [1,7,1], [1,1,1]],

// the output should be boxBlur(image) = [[1]]

/// hint push()
/// Math.floor()

function boxBlur(image) {
  const res = [];

  for (let y = 0; y < image.length - 2; y++) {
    const line = [];
    for (let x = 0; x < image[y].length - 2; x++) {
      let sum = 0;
      let count = 0;

      for (let a = y; a < y + 3; a++) {
        for (let b = x; b < x + 3; b++) {
          sum += image[a][b];
          count++;
        }
      }
      line.push(Math.floor(sum / count));
    }
    res.push(line);
  }

  return res;
}

console.log(
  boxBlur([
    [1, 1, 1],
    [1, 7, 1],
    [1, 1, 1]
  ])
);
