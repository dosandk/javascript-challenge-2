export const rotateMatrix = arr => {
  const width = arr.length || 0;
  const height = arr[0] instanceof Array ? arr[0].length : 0;

  if (height === 0 || width === 0) {
    return [];
  }

  const transformation = [];

  for (let i = 0; i < height; i++) {
    transformation[i] = [];
    for (let j = 0; j < width; j++) {
      transformation[i][j] = arr[j][i];
    }
  }

  return transformation;
};

