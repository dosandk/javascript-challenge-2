export const rotateMatrix = arr => {
  const res_matrix = [];
  for (let i = 0; i < arr.length; i++) {
    res_matrix.push([]);
    for (let j = 0; j < arr.length; j++) {
      res_matrix[i].push(arr[j][i]);
    }
  }
  return res_matrix;
};

