export const dragonCurve = n => {
  return n === 1 ? '1' : `${dragonCurve(n - 1)}1${reverseStr(dragonCurve(n - 1))}`;
};

const reverseStr = str => {
  return str.split('')
    .map(item => item === '1' ? '0' : '1')  
    .reverse()     
    .join('');
};