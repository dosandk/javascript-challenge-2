const dragonCurve = require('./index');

describe('dragonCurve::', () => {
  // need to implement
  it('Should return 1', () => {
    expect(dragonCurve(1)).toEqual(1);
  });
  it('Should return 110', () => {
    expect(dragonCurve(2)).toEqual(110);
  });
  it('Should return 1101100', () => {
    expect(dragonCurve(3)).toEqual(1101100);
  });
  it('Should return 110110011100100', () => {
    expect(dragonCurve(4)).toEqual(110110011100100);
  });
});
