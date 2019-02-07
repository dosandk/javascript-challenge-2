const rotateMatrix = require('./index');

const arr2 = [
  [1, 2],
  [3, 4]
];

const arr2Rotated = [
  [1, 3],
  [2, 4]
];

const arr3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const arr3Rotated = [
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9]
];

describe('rotateMatrix::', () => {
  it('rotates 2x2 matrix', () => {
    expect(rotateMatrix(arr2)).toEqual(arr2Rotated);
  });
  it('rotates 3x3 matrix', () => {
    expect(rotateMatrix(arr3)).toEqual(arr3Rotated);
  });
});
