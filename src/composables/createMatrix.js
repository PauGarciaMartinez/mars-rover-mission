const createMatrix = (xLength, yLength) => {
  var matrix = new Array(xLength);

  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(yLength);
  }

  return { matrix };
}

export default createMatrix;