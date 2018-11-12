export const rotateMatrix = arr => {
  const matrix = [...arr];

  const emptyMatrix = createMatrix(matrix.length);
  const reversedMatrix = reverseMatrix(matrix, emptyMatrix);

  return reversedMatrix;
};

export const createMatrix = length => {
  const matrix = [];

  for (let i = 0; i < length; i++) {
    if (matrix.length < length) {
      matrix[i] = new Array(length);
    }
  }

  return matrix;
};

export const reverseMatrix = (matrix, emptyMatrix) => {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      emptyMatrix[i][j] = matrix[j][i];
    }
  }

  return emptyMatrix;
};
