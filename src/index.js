// You should implement your task here.

module.exports = function towelSort(matrix) {
    if(matrix === undefined || matrix.length === 0) return [];
    let result = [];
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 === 0) {
        result = result.concat(matrix[i].sort((a, b) => a - b));
      } else {
        result = result.concat(matrix[i].sort((a, b) => b - a));
      }
    }
    return result
  }
  
