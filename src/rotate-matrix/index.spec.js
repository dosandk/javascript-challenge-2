const rotateMatrix = require('./index');

describe('rotateMatrix::', () => {
  it('Should sort array by sums of numbers', () => {
    expect(rotateMatrix([[1, 2], [3, 4]])).toEqual([[1, 3], [2, 4]]);
    expect(rotateMatrix([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]])
    ).toEqual([
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9]]);

    expect(rotateMatrix([
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]])).toEqual([
      [1, 5, 9, 13],
      [2, 6, 10, 14],
      [3, 7, 11, 15],
      [4, 8, 12, 16]]);
  });
});
