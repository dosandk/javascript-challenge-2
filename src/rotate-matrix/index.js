export const rotateMatrix = arr => {
  return arr[0].map((columnItem, columnIndex) =>
    arr.map(row =>
      row[columnIndex]));

};

