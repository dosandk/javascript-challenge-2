import {dragonCurve} from './index';

describe('dragonCurve::', () => {
  it('Function returns dragon row with curves', () => {
    expect(dragonCurve(1)).toEqual('1');
  });

  it('Function returns dragon row with curves', () => {
    expect(dragonCurve(2)).toEqual('110');
  });

  it('Function returns dragon row with curves', () => {
    expect(dragonCurve(3)).toEqual('1101100');
  });

  it('Function returns dragon row with curves', () => {
    expect(dragonCurve(4)).toEqual('110110011100100');
  });
});