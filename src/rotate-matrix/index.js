const rotateMatrix = arr => {
  const result = new Array(arr.length);
  for (let i = 0; i < result.length; i++) {
    result[i] = new Array(arr.length);
    for (let j = 0; j < result[i].length; j++ ) {
      result[i][j] = arr[j][i];
    }
  }
  return result;
};

module.exports = rotateMatrix;

