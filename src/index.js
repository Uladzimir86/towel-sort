module.exports = function towelSort(matrix) {
  let arr = [];
  if (!Array.isArray(matrix) || matrix.length === 0) return arr;

  arr = [...matrix[0]];

  for (let i = 1; i < matrix.length; i += 1) {
    if (i % 2 > 0) {
      matrix[i].reverse().forEach((item) => arr.push(item));
    } else {
      matrix[i].forEach((item) => arr.push(item));
    }
  }

  return arr;
};
