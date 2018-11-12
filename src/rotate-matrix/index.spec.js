import { createMatrix, reverseMatrix, rotateMatrix } from './index';

describe('rotateMatrix::', () => {
  it('should return correct array length', () => {
    // Given
    const length = 4;

    // Then
    expect(createMatrix(length).length).toEqual(length);
  });

  it('should return reverse matrix', () => {
    // Given
    const emptyMatrix = [[], []];
    const matrix = [['1', '2'], ['3', '4']];
    const expected = [['1', '3'], ['2', '4']];

    // Then
    expect(reverseMatrix(matrix, emptyMatrix)).toEqual(expected);
  });

  it('should rotate array', () => {
    // Given
    const array = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']];
    const expected = [['1', '4', '7'], ['2', '5', '8'], ['3', '6', '9']];

    // Then
    expect(rotateMatrix(array)).toEqual(expected);
  });
});
