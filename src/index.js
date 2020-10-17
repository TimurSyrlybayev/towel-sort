
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix !== undefined) {
    let resultMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 !== 0) {
        resultMatrix.push(...matrix[i].reverse());
      } else {
        resultMatrix.push(...matrix[i]);
      }
    }
    return resultMatrix;
  }
  return [];
}
