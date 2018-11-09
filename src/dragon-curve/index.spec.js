import {dragonCurve} from './index';

describe('dragonCurve::', () => {
  it('Should convert normal number into dragon-number', () => {
    expect(dragonCurve(1)).toEqual([1]);
    expect(dragonCurve(2)).toEqual([1,1,0]);
    expect(dragonCurve(3)).toEqual([1,1,0,1,1,0,0]);
  });
});
