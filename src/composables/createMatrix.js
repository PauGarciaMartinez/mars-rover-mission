const createMatrix = (xLength, yLength) => {
  var matrix = new Array(xLength).fill(0);

  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(yLength).fill(0);
  }

  return { matrix };
}

export default createMatrix;