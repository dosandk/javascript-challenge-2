import {dragonCurve} from './index';

describe('dragonCurve::', () => {
  it('Return curve of 1 bend', () => {
    expect(dragonCurve(1)).toEqual(1);
  });
  it('Return curve of 2 bends', () => {
    expect(dragonCurve(2)).toEqual(110);
  });
  it('Return curve of 3 bends', () => {
    expect(dragonCurve(3)).toEqual(1101100);
  });
  it('Return curve of 4 bends', () => {
    expect(dragonCurve(4)).toEqual(110110011100100);
  });
  it('Return curve of 5 bends', () => {
    expect(dragonCurve(5)).toEqual(1101100111001001110110001100100);
  });
});
