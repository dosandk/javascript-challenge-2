import {dragonCurve} from './index';

describe('dragonCurve::', () => {
  it('Should return code as "prev code | 1 | reversed prev code with 0 as 1 and 1 as 0"', () => {
    expect(dragonCurve(1)).toEqual(1);
    expect(dragonCurve(2)).toEqual(110);
    expect(dragonCurve(3)).toEqual(1101100);
    expect(dragonCurve(4)).toEqual(110110011100100);
  });
});
