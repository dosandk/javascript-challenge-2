export const dragonCurve = n => {
  let initialCode = '1';

  if (n > 0) {
    for (let i = 1; i < n; i++) {
      const changedCode = [...initialCode]
        .reverse()
        .map(value => value === '1' ? '0' : '1')
        .join('');

      initialCode = `${initialCode}1${changedCode}`;
    }
    return parseInt(initialCode, 10);
  }
  throw new Error('Only positive values allowed');
};


