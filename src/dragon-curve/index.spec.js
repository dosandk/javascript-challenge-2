import {dragonCurve} from './index';

describe('dragonCurve::', () => {
  it('Return 1', () => {
    expect(dragonCurve(1)).toEqual(1);
  });
  it('Return 110', () => {
    expect(dragonCurve(2)).toEqual(110);
  });
  it('Return 1101100', () => {
    expect(dragonCurve(3)).toEqual(1101100);
  });
  it('Return 110110011100100', () => {
    expect(dragonCurve(4)).toEqual(110110011100100);
  });
});
