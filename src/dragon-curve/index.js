export const dragonCurve = n => {
  let curve = '1';

  for (let i = 2; i <= n; i++) {
    let acc = '1';
    let prev = '1';

    for (let j = 0; j < curve.length; j++) {
      acc += curve[j];

      if (prev === '0') {
        acc += '1';
        prev = '1';
      } else {
        acc += '0';
        prev = '0';
      }
    }
    curve = acc;
  }

  return curve;
};
