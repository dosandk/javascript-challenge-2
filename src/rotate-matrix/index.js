/* eslint-disable-next-line */
export const rotateMatrix = arr => {
  const firstRowKeys = Object.keys(arr[0]);

  return firstRowKeys.map( colEl => {
    return arr.map( rowEl => {
      return rowEl[colEl];
    });
  });
};
