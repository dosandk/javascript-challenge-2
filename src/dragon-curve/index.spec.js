import {dragonCurve} from './index';

describe('dragonCurve::', () => {
  it('Should return left direction Dragon Curve n-th order, as in original task', () => {
    expect(dragonCurve(1, 1)).toEqual('1');
    expect(dragonCurve(1, 2)).toEqual('110');
    expect(dragonCurve(1, 3)).toEqual('1101100');
    expect(dragonCurve(1, 4)).toEqual('110110011100100');
  });

  it('Should return right direction Dragon Curve n-th order', () => {
    expect(dragonCurve(0, 1)).toEqual('0');
    expect(dragonCurve(0, 2)).toEqual('001');
    expect(dragonCurve(0, 3)).toEqual('0010011');
    expect(dragonCurve(0, 4)).toEqual('001001100011011');
  });

  it('Should return random direction Dragon Curve n-th order', () => {
    const result = dragonCurve('', 4);
    expect(/^[0-1]{15}$/.test(result)).toEqual(true);
    expect(parseInt(result.slice(0, result.length / 2), 10) + 
      parseInt(result.slice(result.length / 2 + 1).split('').reverse().join(''), 10)).
      toEqual(1111111);
  });
});