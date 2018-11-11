export const dragonCurve = n => {
  let result = '';
  
  const dragonCurveNext = (dragonCurvePrevious = '') => {
    const dragonCurvePreviousLength = dragonCurvePrevious.length;
    let currentDirection = 1;
    let result = '';

    for (let i = 0; i < dragonCurvePreviousLength; i++) {
      result = `${result}${currentDirection}${dragonCurvePrevious.charAt(i)}`;
      currentDirection = Number(!currentDirection);
    }
    result = `${result}${currentDirection}`;

    return result;
  };

  for (let i = 0; i < n; i++) {
    result = dragonCurveNext(result);
  }
  
  return result;  
};

/*
export const dragonCurve = (direction, n) => {
  let result = '';
  
  const dragonCurveNext = (direction, dragonCurvePrevious = '') => {
    const dragonCurvePreviousLength = dragonCurvePrevious.length;
    let currentDirection = (direction === '') ? Math.round(Math.random()) : direction;
    let result = '';

    for (let i = 0; i < dragonCurvePreviousLength; i++) {
      result = `${result}${currentDirection}${dragonCurvePrevious.charAt(i)}`;
      currentDirection = Number(!currentDirection);
    }
    result = `${result}${currentDirection}`;

    return result;
  };

  for (let i = 0; i < n; i++) {
    result = dragonCurveNext(direction, result);
  }

  return result;  
};
*/