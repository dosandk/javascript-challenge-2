export const rotateMatrix = arr => {
  // logic...
  return arr[0].map(({}, i) =>
    arr.map(value =>
      value[i]));
};

