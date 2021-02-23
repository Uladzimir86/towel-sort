
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let  arr = [];
     if (!Array.isArray(matrix)) return arr;
     if (matrix.length == false) return arr;

  arr = matrix[0];

  for (i = 1; i<matrix.length; i++) {
    if (i%2 > 0) {
      matrix[i].reverse().forEach(item => arr.push(item));
    }
    else if (i%2 == 0) {
      matrix[i].forEach(item => arr.push(item))
    }
  }
  
  return arr;
}
