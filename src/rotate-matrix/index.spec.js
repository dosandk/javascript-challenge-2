const rotateMatrix = require('./index');

describe('rotateMatrix::', () => {
  it('Function turns the matrix clockwise', () => {
    expect(rotateMatrix([
      [1, 2],
      [5, 6]
    ])).toEqual([
      [5, 1],
      [6, 2]
    ]);
  });

  it('Function turns the matrix clockwise', () => {
    expect(rotateMatrix([
      [1, 2, 3],
      [5, 6, 7],
      [9, 10, 11]
    ])).toEqual([
      [9, 5, 1],
      [10, 6, 2],
      [11, 7, 3]
    ]);
  });

  it('Function turns the matrix clockwise', () => {
    expect(rotateMatrix([
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ])).toEqual([
      [13, 9, 5, 1],
      [14, 10, 6, 2],
      [15, 11, 7, 3],
      [16, 12, 8, 4]
    ]);
  });
});
