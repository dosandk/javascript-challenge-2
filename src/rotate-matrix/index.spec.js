import {rotateMatrix} from './index';

describe('rotateMatrix::', () => {
  const arr1 = [
    [1, 2],
    [3, 4]
  ];
  const arr2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  it('Should return', () => {
    expect(rotateMatrix(arr1)).toEqual([
      [1,3],
      [2,4]
    ]);
    expect(rotateMatrix(arr2)).toEqual([
      [1,4,7],
      [2,5,8],
      [3,6,9]
    ]);
  });
});
