export const dragonCurve = n => {
  const reverseStr = str => {
    return str.split('')
      .map(e => e === '1' ? '0' : '1')  
      .reverse()
      .join('');
  }; 
  
  let dragonNumber = '1';
  
  for (n -= 1; n > 0; n--) {
    dragonNumber += '1' + reverseStr(dragonNumber);
  }

  return dragonNumber;
};
