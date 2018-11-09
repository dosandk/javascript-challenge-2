export const dragonCurve = n => {

  const reverseString = string => {     
    return string.split('')
      .map(el => {
        return el === '1' ? '0' : '1';
      })  
      .reverse()
      .join('');
  }; 
  
  let dragonRow = '1';

  n -= 1;
  while (n > 0){
    dragonRow += '1' + reverseString(dragonRow);
    n -= 1;
  }
  return dragonRow;
};