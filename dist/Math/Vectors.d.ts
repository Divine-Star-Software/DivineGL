declare abstract class VectorBase {
    static X_INDEX: number;
    static Y_INDEX: number;
    static Z_INDEX: number;
    static W_INDEX: number;
    protected abstract _values: Float32Array;
    get x(): number;
    set x(value: number);
    get y(): number;
    set y(value: number);
    getArray(): Float32Array;
}
export declare class Vector2 extends VectorBase {
    static STRIDE: number;
    protected _values: Float32Array;
    constructor(x?: number, y?: number);
    set(x: number, y: number): void;
}
export declare class Vector3 extends VectorBase {
    static STRIDE: number;
    protected _values: Float32Array;
    constructor(x?: number, y?: number, z?: number);
    get z(): number;
    set z(value: number);
    set(x: number, y: number, z: number): void;
}
export declare class Vector4 extends VectorBase {
    static STRIDE: number;
    protected _values: Float32Array;
    constructor(x?: number, y?: number, z?: number, w?: number);
    get z(): number;
    set z(value: number);
    get w(): number;
    set w(value: number);
    set(x: number, y: number, z: number, w: number): void;
}
export {};
