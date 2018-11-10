export const rotateMatrix = arr => {
  if (checkMatrix(arr)){
    return arr.map((value, i) => value.map((an, j) => arr[j][i]));
  }
  throw new Error('Not a square matrix');
};

const checkMatrix = arr => {
  const firstRow = arr[0];

  return arr.every(value => value.length === firstRow.length) && firstRow.length === arr.length;
};
