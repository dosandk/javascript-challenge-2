import { dragonCurve } from './index';
describe('dragonCurve::', () => {
  it('should output 110', () => {
    // Given
    const n = '2';
    const expected = '110';

    // Then
    expect(dragonCurve(n)).toBe(expected);
  });

  it('should output 110110011100100', () => {
    // Given
    const n = '4';
    const expected = '110110011100100';

    // Then
    expect(dragonCurve(n)).toBe(expected);
  });
});
