export const dragonCurve = n => {
  const reverseDragon = str => {
    const result = str.split('');
    for (let i = 0; i < result.length; i++) {
      if (result[i] === '1') {
        result[i] = '0';
      } else {
        result[i] = '1'; 
      }
    }
    return result.reverse().join('');
  };
  let num = '1';
  n -= 1;
  while (n > 0) {
    num += '1' + reverseDragon(num);
    n -= 1;
  }
  return num;
};  