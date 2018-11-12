export const rotateMatrix = arr => {
  return arr[0].map((column, index) => (
    arr.map(row => row[index])));
};
