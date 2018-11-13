import { rotateMatrix } from './index';

describe('rotateMatrix::', () => {
  it('Should rotate nubers matrix 2x2', () => {
    expect(rotateMatrix([
      [1, 2],
      [3, 4] ]
    )).toEqual([
      [1, 3],
      [2, 4]
    ]);
  });
  it('Should rotate nubers matrix 3x3', () => {
    expect(rotateMatrix([
      [1,22,3],
      [4,5,-6],
      [7,87,9]
    ])).toEqual([
      [1,4,7],
      [22,5,87],
      [3,-6,9]
    ]);
  });
  it('Should rotate strings matrix 3x3', () => {
    expect(rotateMatrix([
      ['a', 'b', 'c'],
      ['d', 'e', 'f'],
      ['g', 'h', 'i']
    ])).toEqual([
      ['a','d','g'],
      ['b','e','h'],
      ['c','f','i']
    ]);
  });
});
