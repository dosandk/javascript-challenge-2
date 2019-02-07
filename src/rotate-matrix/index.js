const rotateMatrix = arr => {
  const rotatedMatrix = new Array();
  let tmpArr = new Array();
  let col;
  
  for (let i = 0; i < arr.length; i++) {
    const innerArrLength = arr[i].length;

    for (let j = 0; j <= innerArrLength; j++) {
      col = innerArrLength - 1 - i;

      if (tmpArr.length >= innerArrLength) {
        rotatedMatrix.push(tmpArr);
        tmpArr = [];
      } else {
        tmpArr.push(arr[j][col]);
      }
    }
  }
  rotatedMatrix.reverse();

  return rotatedMatrix;
};

module.exports = rotateMatrix;

