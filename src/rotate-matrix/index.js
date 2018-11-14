export const rotateMatrix = arr => {
  return arr.map((item, index) =>
    arr.map(item => item[index])
  );
};