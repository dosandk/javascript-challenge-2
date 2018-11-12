const rotateMatrix = arr => {
  const resultArr = arr.map(() => []);
  
  arr.forEach(outerItem => {
    outerItem.forEach((innerItem, innerIndex) => {
      resultArr[innerIndex].push(innerItem);
    });
  });

  return resultArr;
};

module.exports = rotateMatrix;