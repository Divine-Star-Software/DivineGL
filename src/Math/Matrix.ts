export class Matrix {
 static IdenityMatrix(rows = 4, cols = 4) {
  const identiyMatrix = new Matrix(rows, cols);
  for (let r = 0; r < rows; r++) {
   for (let c = 0; c < cols; c++) {
    if (r == c) identiyMatrix.set(r, c, 1);
   }
  }
  return identiyMatrix;
 }
 protected _values: Float32Array;

 constructor(public rows = 4, public cols = 4) {
  this._values = new Float32Array(rows * cols);
 }

 get(row: number, col: number) {
  return this._values[row * this.cols + col];
 }
 set(row: number, col: number, value: number) {
  return (this._values[row * this.cols + col] = value);
 }

 getFLoatArray() {
  return this._values;
 }
}
