module.exports = arr => {
  // logic...
  return arr[0].map((columnItem, columnIndex) => arr.map(row => row[columnIndex]));
};
