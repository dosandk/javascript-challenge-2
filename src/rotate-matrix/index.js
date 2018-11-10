export const rotateMatrix = arr => {
  return arr.length !== 0 && arr.length === arr[0].length
    ? arr[0].map((elem, i) => arr.map( elem => elem[i]))
    : new Error('this is not a square matrix');
};

