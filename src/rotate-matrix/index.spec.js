import {rotateMatrix} from './index';

describe('rotateMatrix::', () => {
  it('Should return rotated matrix of 2x2 elements', () => {
    const arr2 = [
      [1, 2],
      [3, 4]
    ];
    const result2 = [
      [1,3],
      [2,4]
    ];
    expect(rotateMatrix(arr2)).toBe(result2);
  });

  it('Should return rotated matrix of 3x3 elements', () => {
    const arr3 = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    const result3 = [
      [1,4,7],
      [2,5,8],
      [3,6,9]
    ];
    expect(rotateMatrix(arr3)).toEqual(result3);
  });
});
