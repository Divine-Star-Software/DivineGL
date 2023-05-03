export class Matrix {
    rows;
    cols;
    static IdenityMatrix(rows = 4, cols = 4) {
        const identiyMatrix = new Matrix(rows, cols);
        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (r == c)
                    identiyMatrix.set(r, c, 1);
            }
        }
        return identiyMatrix;
    }
    _values;
    constructor(rows = 4, cols = 4) {
        this.rows = rows;
        this.cols = cols;
        this._values = new Float32Array(rows * cols);
    }
    get(row, col) {
        return this._values[row * this.cols + col];
    }
    set(row, col, value) {
        return (this._values[row * this.cols + col] = value);
    }
    getFLoatArray() {
        return this._values;
    }
}
