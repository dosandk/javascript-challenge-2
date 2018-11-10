import {rotateMatrix} from './index';

describe('rotateMatrix::', () => {
  it('Should return new matrix, where column = row', () => {
    expect(rotateMatrix([
      [1, 2],
      [3, 4],
    ])).toEqual([
      [1, 3],
      [2, 4],
    ]);
    expect(rotateMatrix([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ])).toEqual([
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9]
    ]);
    expect(rotateMatrix([
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, 25],
      [26, 27, 28, 29, 30],
      [31, 32, 33, 34, 35]
    ])).toEqual([
      [11, 16, 21, 26, 31],
      [12, 17, 22, 27, 32],
      [13, 18, 23, 28, 33],
      [14, 19, 24, 29, 34],
      [15, 20, 25, 30, 35]
    ]);
  });
});

