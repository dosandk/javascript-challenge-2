const dragonCurve = n => {
  const reverseStr = string => {
    return string.split('').map(element => {
      return element === '1' ? '0' : '1';
    }).reverse().join('');
  };
  const buildFractal = (dragonRow = '1') => {
    for (n -= 1; n > 0; n--) {
      dragonRow += ('1' + reverseStr(dragonRow));
    }
    return dragonRow;
  };
  return buildFractal();
};

module.exports = dragonCurve;
