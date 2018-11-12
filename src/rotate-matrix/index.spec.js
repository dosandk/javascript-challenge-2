import {rotateMatrix} from './index.js';

const arr1 = [
  [1, 2],
  [3, 4]
];

const arr2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const arr1Rotated = [
  [1,3],
  [2,4]
];

const arr2Rotated = [
  [1,4,7],
  [2,5,8],
  [3,6,9]
];

describe('rotateMatrix::', () => {
  it('Should rotate the matrix', () => {
    expect(rotateMatrix(arr1)).toEqual(arr1Rotated);
    expect(rotateMatrix(arr2)).toEqual(arr2Rotated);
  });
});
