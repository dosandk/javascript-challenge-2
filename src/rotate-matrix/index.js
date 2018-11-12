export const rotateMatrix = arr => {
  const newArr = [];
  for (let j = 0; j < arr.length; j++) {
    const arrItems = [];
    arr.forEach(item => {
      arrItems.push(item[j]);
    });
    newArr.push(arrItems);
  }
  return newArr;
};

