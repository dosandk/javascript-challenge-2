export const rotateMatrix = arr =>
  arr.map((arrIteration, arrIndex) =>
    arrIteration.map((value, index) => arr[index][arrIndex]));
