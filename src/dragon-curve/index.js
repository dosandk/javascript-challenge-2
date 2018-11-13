export const dragonCurve = n => {
  const reverseString = string => {     
    return string.split('')
      .map(element => {
        return element === '1' ? '0' : '1';
      })  
      .reverse()
      .join('');
  }; 
  let dragonLine = '1';
  n -= 1;
  while (n > 0){
    dragonLine += '1' + reverseString(dragonLine);
    n -= 1;
  }
  return dragonLine;
};
