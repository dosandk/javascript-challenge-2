export const rotateMatrix = arr => {
  return arr.map((row, i) => row.map((column, j) => arr[j][i]));
  
};

