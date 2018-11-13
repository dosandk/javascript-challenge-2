export const rotateMatrix = arr => {
  function getSimpleArr (array, index) {
    const simpeArr = [];
    for (let i = 0; i < array.length; i++) {
      simpeArr.push(array[i][index]);
    }
    return simpeArr;
  }
  const result = [];
  for (let j = 0; j < arr.length; j++) {
    result.push(getSimpleArr(arr, j));
  }
  return result;
};

