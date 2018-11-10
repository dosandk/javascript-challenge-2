const invert = st => [...st].map(i => i === '0' ? 1 : 0).reverse().join('');

export const dragonCurve = n => n > 1
  ? dragonCurve(n - 1) + '1' + invert(dragonCurve(n - 1))
  : '1';
