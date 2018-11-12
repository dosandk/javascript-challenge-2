import {dragonCurve} from './index';

describe('dragonCurve::', () => {
  it('Should return rotated matrix of 2x2 elements', () => {
    const arr2 = [
      [1, 2],
      [3, 4]
    ];
    const result = [
      [1,3],
      [2,4]
    ];
    expect(dragonCurve(arr2)).toEqual(result);
  });
});
