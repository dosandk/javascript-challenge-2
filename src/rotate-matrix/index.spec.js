import {rotateMatrix} from './index';

describe('rotateMatrix::', () => {
  it('should return a rotated matrix', () => {
    expect(rotateMatrix([[1, 2], [3, 4]])).toEqual([[1, 3], [2, 4]]);
    expect(rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
      .toEqual([[1, 4, 7], [2, 5, 8], [3, 6, 9]]);
  });
});