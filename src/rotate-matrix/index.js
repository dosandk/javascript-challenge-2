export const rotateMatrix = arr => {
  const resultArray = [];
  const len = arr.length;
  let rowArray = [];

  for (let col = 0; col < len; col++){
    for (let row = 0; row < len; row++){
      rowArray.push(arr[row][col]);      
    }
    resultArray.push(rowArray);
    rowArray = [];    
  }  
  return resultArray;
};
