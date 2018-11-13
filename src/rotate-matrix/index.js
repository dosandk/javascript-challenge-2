export const rotateMatrix = arr => {
  return arr[0]
    .map( (el, idx) => {
      return arr.map(el => el[idx]);
    });
};

