const dragonCurve = require('./index');

describe('dragonCurve::', () => {
  it('Function returns dragon row with 1 curve', () => {
    expect(dragonCurve(1)).toEqual('1');
  });

  it('Function returns dragon row with 2 curves', () => {
    expect(dragonCurve(2)).toEqual('110');
  });

  it('Function returns dragon row with 3 curves', () => {
    expect(dragonCurve(3)).toEqual('1101100');
  });

  it('Function returns dragon row with 4 curves', () => {
    expect(dragonCurve(4)).toEqual('110110011100100');
  });
  it('Function returns dragon row with 4 curves', () => {
    expect(dragonCurve(5)).toEqual('1101100111001001110110001100100');
  });
});

