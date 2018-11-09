import { dragonCurve } from './index';

describe('dragonCurve::', () => {
  test('Should return correct numbers order', () => {
    expect(dragonCurve(1)).toBe(1);
    expect(dragonCurve(2)).toBe(110);
    expect(dragonCurve(3)).toBe(1101100);
    expect(dragonCurve(4)).toBe(110110011100100);
  });
});
