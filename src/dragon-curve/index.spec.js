import {dragonCurve} from './index'

describe('dragonCurve::', () => {
  // need to implement
  it('Should return turns amount for number 1', () => {
    expect(dragonCurve(1)).toEqual(1);
  });
   it('Should return turns amount for number 2', () => {
    expect(dragonCurve(2)).toEqual(110);
  });
   it('Should return turns amount for number 3', () => {
    expect(dragonCurve(3)).toEqual(1101100);
  });
   it('Should return turns amount for number 4', () => {
    expect(dragonCurve(4)).toEqual(110110011100100);
  });
   it('Should return turns amount for number 5', () => {
    expect(dragonCurve(5)).toEqual(1101100111001001110110001100100);
  });
   it('Should return turns amount for number 6', () => {
    expect(dragonCurve(6)).toEqual(110110011100100111011000110010011101100111001000110110001100100);
  });
});
