import {dragonCurve} from './index';

describe('dragonCurve::', () => {

  it('Should return corect code ', () => {
    expect(dragonCurve(1)).toEqual(1);
    // expect(dragonCurve(2)).toEqual(110);
    // expect(dragonCurve(3)).toEqual(1101100);
    // expect(dragonCurve(4)).toEqual(110110011100100);
  });
});
