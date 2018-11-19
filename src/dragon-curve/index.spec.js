import {dragonCurve} from './index';

describe('dragonCurve::', () => {
  it('Shoult return a dragon curve for the number 1', () => {
    expect(dragonCurve(1)).toBe('1');
  });

  it('Shoult return a dragon curve for the number 2', () => {
    expect(dragonCurve(2)).toBe('110');
  });

  it('Shoult return a dragon curve for the number 3', () => {
    expect(dragonCurve(3)).toBe('1101100');
  });

  it('Shoult return a dragon curve for the number 4', () => {
    expect(dragonCurve(4)).toBe('110110011100100');
  });

  it('Shoult return a dragon curve for the number 5', () => {
    expect(dragonCurve(5)).toBe('1101100111001001110110001100100');
  });
});
