import {dragonCurve} from './index';

describe('dragonCurve::', () => {
  it('Should return left direction Dragon Curve n-th order', () => {
    expect(dragonCurve(1)).toEqual('1');
    expect(dragonCurve(2)).toEqual('110');
    expect(dragonCurve(3)).toEqual('1101100');
    expect(dragonCurve(4)).toEqual('110110011100100');
  });
});

/*
describe('dragonCurve::', () => {
  it('Should return left direction Dragon Curve n-th order, as in original task', () => {
    expect(dragonCurve(1, 1)).toEqual('1');
    expect(dragonCurve(1, 2)).toEqual('110');
    expect(dragonCurve(1, 3)).toEqual('1101100');
    expect(dragonCurve(1, 4)).toEqual('110110011100100');
  });

  it('Should return right direction Dragon Curve n-th order', () => {
    expect(dragonCurve(0, 1)).toEqual('1');
    expect(dragonCurve(0, 2)).toEqual('110');
    expect(dragonCurve(0, 3)).toEqual('1101100');
    expect(dragonCurve(0, 4)).toEqual('110110011100100');
  });

  it('Should return random direction Dragon Curve n-th order', () => {
    expect(dragonCurve('', 1)).toEqual('1'||'0');
    expect(dragonCurve('', 2)).toEqual('110' || '100' || '011' || '001);
  });
});
*/
