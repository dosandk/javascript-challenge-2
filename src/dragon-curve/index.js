const dragonCurve = n => {
  const arr = [1];

  for (let i = 1; i < n; i++) {
    const reverseArr = arr.map(item => {
      return item === 1 ? 0 : 1;
    });
    reverseArr.reverse();
    arr.push(1, ...reverseArr);
  }
  return arr.join('');
};

module.exports = dragonCurve;
