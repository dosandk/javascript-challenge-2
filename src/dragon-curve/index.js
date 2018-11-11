import { isNumber } from 'util';

export const dragonCurve = n => {
  if (!isNumber(n) || n <= 0) {
    throw 'Wrong parametr';
  }
  let result = '';
  for ( let i = 1; i <= n; i++ ) {
    result = dragonCurveStep(result);
  }
  return result;
};

const dragonCurveStep = (previousStep = '') => {
  const firstPart = previousStep.concat('1');
  const secondPartCharArray = previousStep.split('').reverse();
  secondPartCharArray.forEach((digit, index, Array) => {
    Array[index] = digit === '1' ? '0' : '1'; 
  });
  const secondPart = secondPartCharArray.join('');
  return previousStep === '' ? firstPart : firstPart + secondPart;
};