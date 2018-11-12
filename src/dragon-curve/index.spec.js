import {dragonCurve} from './index';

describe('dragonCurve::', () => {
  it('Function returns dragon', () => {
    expect(dragonCurve(1)).toEqual('1');
  });

  it('Function returns dragon', () => {
    expect(dragonCurve(2)).toEqual('110');
  });

  it('Function returns dragon', () => {
    expect(dragonCurve(3)).toEqual('1101100');
  });

  it('Function returns dragon', () => {
    expect(dragonCurve(5)).toEqual('1101100111001001110110001100100');
  });
});