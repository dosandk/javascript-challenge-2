export const dragonCurve = n => {
  let result = '1';

  const flip = str =>
    [...str]
      .map(val => parseInt(val, 10) === 1 ? 0 : 1)
      .reverse()
      .join('');

  for (let i = 1; i < n; i++) {
    result += '1' + flip(result);
  }

  return parseInt(result, 10);
};
