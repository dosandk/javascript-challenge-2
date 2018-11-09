export const dragonCurve = n => {

  const reverseString = string => {     
    const result = string.split('');
    for (let i = 0; i < result.length; i++) {
      result[i] = (result[i] === '1') ? '0' : '1';
    }    
    return result.reverse().join('');
  };  
  let dragonRow = '1';

  n -= 1;
  while (n > 0){
    dragonRow += '1' + reverseString(dragonRow);
    n -= 1;
  }
  return dragonRow;
};