export declare class RGBAColor {
    static DIVISOR: number;
    static R_INDEX: number;
    static G_INDEX: number;
    static B_INDEX: number;
    static A_INDEX: number;
    static toFloat: (input: number) => number;
    static toINT: (input: number) => number;
    private _values;
    get r(): number;
    set r(value: number);
    get g(): number;
    set g(value: number);
    get b(): number;
    set b(value: number);
    get a(): number;
    set a(value: number);
    set(r: number, g: number, b: number, a?: number): void;
    getAsRGBA(): number[];
    getAsRGBAFloatArray(): Float32Array;
    getAsRGB(): number[];
    getAsRGBFloatArray(): Float32Array;
}
