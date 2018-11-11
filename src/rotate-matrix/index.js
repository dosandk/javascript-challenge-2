export const rotateMatrix = arr => {
  return arr[0].map((elem, index) => arr.map( elem => elem[index]));
};

