const dragonCurve = n => {
  let curve = '1';
  let counter = n;

  function getDragonCurve () {
    if (counter > 1) {
      counter--;
      
      const str = getDragonCurve(n - 1);
      curve += `1${flipAndReverse(str)}`;
    }
  
    return curve;
  }
  
  function flipAndReverse (str) {
    if (str) {
      
      return str
        .split('')
        .map(value => parseInt(value, 10) === 1 ? 0 : 1)
        .reverse()
        .join('');
    }
  }

  return getDragonCurve();
};

module.exports = dragonCurve;