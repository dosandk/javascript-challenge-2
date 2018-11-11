import { isArray } from 'util';

export const rotateMatrix = arr => {
  if (arr.length !== arr[0].length || !isArray(arr)) {
    throw 'Wrong parametr';
  }
  let startIndex = 1;
  for (let row = 0; row < arr.length; row++){
    for (let column = startIndex; column < arr.length; column++){
      const buffer = arr[row][column];
      arr[row][column] = arr[column][row];
      arr[column][row] = buffer;
    }
    startIndex++;
  }
  return arr;
};
