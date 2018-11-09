export const dragonCurve = n => {
  let result = '1';
  const turnString = str => str
    .split('')
    .reverse()
    .map(val => parseInt(val, 10) === 1 ? 0 : 1)
    .join('');

  for (let i = 1; i < n; i++) {
    result = `${result}1${turnString(result)}`;
  }

  return parseInt(result, 10);
};
