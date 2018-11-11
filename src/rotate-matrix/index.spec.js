import {rotateMatrix} from './index';

describe('rotateMatrix::', () => {
  const arr1 = [
    [1, 2],
    [3, 4]
  ];
  it('2x2 matrix rotate', () => {
    expect(rotateMatrix(arr1)).toEqual([
      [1,3],
      [2,4]
    ]);
  });
  const arr2 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  it('3x3 matrix rotate', () => {
    expect(rotateMatrix(arr2)).toEqual([
      [1,4,7],
      [2,5,8],
      [3,6,9]
    ]);
  });
  const arr3 = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
  ];
  it('4x4 matrix rotate', () => {
    expect(rotateMatrix(arr3)).toEqual([
      [1,5,9,13],
      [2,6,10,14],
      [3,7,11,15],
      [4,8,12,16]
    ]);
  });
  it('Throws error when wrong parameter passed', () =>{
    const arr4 = [
      [1,2,3,4],
      [5,6,7,8],
      [9,10,11,12],
    ];
    const notArr = '';
    const test1 = () => {
      rotateMatrix(arr4);
    };
    const test2 = () => {
      rotateMatrix(notArr);
    };
    expect(test1).toThrow();
    expect(test2).toThrow();
  });
});
