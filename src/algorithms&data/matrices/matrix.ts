const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[0][0]); // Output: 1 (First row, first column)
console.log(matrix[1][2]); // Output: 6 (Second row, third column)

const rows = 3;
const cols = 3;
const emptyMatrix = Array.from({ length: rows }, () => Array(cols).fill(0));

function addMatrices(matrixA, matrixB) {
  return matrixA.map((row, i) => row.map((val, j) => val + matrixB[i][j]));
}

function transpose(matrix) {
  return matrix[0].map((_, colIndex) => matrix.map((row) => row[colIndex]));
}

function multiplyMatrices(a, b) {
  let result = Array.from({ length: a.length }, () =>
    Array(b[0].length).fill(0),
  );
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b[0].length; j++) {
      for (let k = 0; k < a[0].length; k++) {
        result[i][j] += a[i][k] * b[k][j];
      }
    }
  }
  return result;
}

const matrixW = [
  [1, 2, 3],
  [4, 5, 6],
];
for (let i = 0; i < matrixW.length; i++) {
  for (let j = 0; j < matrixW[i]!.length; j++) {
    console.log(matrixW[i]![j]);
  }
}