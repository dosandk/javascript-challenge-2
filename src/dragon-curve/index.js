export const dragonCurve = n => {
  let res = '1';
  if (n === 1) {
    return n;
  } else {
    for (let i = 1; i < n; i++) {
      let a;
      let b;
      let c;
      let d;
      let e;
      if (res.length === 1 && (n ^ 0) === n) {
        a = res;
        b = '1';
        c = res[0] === '1' ? '0' : '1';
        res = a + b + c;
      } else if (res.length > 1 && res.length % 2 !== 0 && (n ^ 0) === n) {
        a = res;
        b = '1';
        c =  res.slice(0, res.length / 2);
        d =  res[Math.floor(res.length / 2)] === '1' ? '0' : '1';
        e =  res.slice(Math.round(res.length / 2), res.length);
        res = a + b + (c + d + e);
      } else {
        res = alert('Invalid function attribute!');
      }
    }
    return res;
  }
};
