import {rotateMatrix} from './index';

describe('rotateMatrix::', () => {
  
  it('Should return rotated matrix of 2x2 elements', () => {
    const arr = [
      [1, 2],
      [3, 4]
    ];
    const result = [
      [1,3],
      [2,4]
    ];
    expect(rotateMatrix(arr)).toEqual(result);
  });

  it('Should return rotated matrix of 3x3 elements', () => {
    const arr = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    const result = [
      [1,4,7],
      [2,5,8],
      [3,6,9]
    ];
    expect(rotateMatrix(arr)).toEqual(result);
  });

  it('Should return rotated matrix of 4x4 elements', () => {
    const arr = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ];
    const result = [
      [1,5,9,13],
      [2,6,10,14],
      [3,7,11,15],
      [4,8,12,16]
    ];
    expect(rotateMatrix(arr)).toEqual(result);
  });

  it('Should return rotated matrix of 5x5 elements', () => {
    const arr = [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25]
    ];
    const result = [
      [1,6,11,16,21],
      [2,7,12,17,22],
      [3,8,13,18,23],
      [4,9,14,19,24],
      [5,10,15,20,25]
    ];
    expect(rotateMatrix(arr)).toEqual(result);
  });

  it('Should return rotated matrix of 3x3 sybmol elements', () => {
    const arr = [
      ['aaa', 'bbb', 'ccc'],
      ['ddd', 'eee', 'fff'],
      ['ggg', 'hhh', 'iii']
    ];
    const result = [
      ['aaa','ddd','ggg'],
      ['bbb','eee','hhh'],
      ['ccc','fff','iii']
    ];
    expect(rotateMatrix(arr)).toEqual(result);
  });
});
