import {dragonCurve} from './index';

describe('dragonCurve::', () => {
  it('1st DC',() => {
    expect(dragonCurve(1)).toBe('1');
  });
  it('2nd DC',() => {
    expect(dragonCurve(2)).toBe('110');
  });
  it('3rd DC',() => {
    expect(dragonCurve(3)).toBe('1101100');
  });
  it('4th DC',() => {
    expect(dragonCurve(4)).toBe('110110011100100');
  });
  it('Throws error when wrong parameter passed', () =>{
    const test1 = () => {
      return dragonCurve(-1);
    };
    expect(test1).toThrow();
    const test2 = () => {
      return dragonCurve('notNumber');
    };
    expect(test2).toThrow();
  });
});
