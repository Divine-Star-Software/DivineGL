export declare class Matrix {
    rows: number;
    cols: number;
    static IdenityMatrix(rows?: number, cols?: number): Matrix;
    protected _values: Float32Array;
    constructor(rows?: number, cols?: number);
    get(row: number, col: number): number;
    set(row: number, col: number, value: number): number;
    getFLoatArray(): Float32Array;
}
