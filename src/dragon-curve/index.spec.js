import {dragonCurve} from './index';

describe('dragonCurve::', () => {
  it('should be equal 1', () => {
    expect(dragonCurve(1)).toEqual('1');
  });
  it('should be equal 110', () => {
    expect(dragonCurve(2)).toEqual('110');
  });
  it('should be equal 1101100', () => {
    expect(dragonCurve(3)).toEqual('1101100');
  });
  it('should be equal 110110011100100', () => {
    expect(dragonCurve(4)).toEqual('110110011100100');
  });
});
