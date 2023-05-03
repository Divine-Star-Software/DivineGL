class RGBAColor {
    static DIVISOR = 0xff;
    static R_INDEX = 0;
    static G_INDEX = 1;
    static B_INDEX = 2;
    static A_INDEX = 3;
    static toFloat = (input) => input / RGBAColor.DIVISOR;
    static toINT = (input) => input * RGBAColor.DIVISOR;
    _values = new Float32Array(4);
    get r() {
        return this._values[RGBAColor.R_INDEX];
    }
    set r(value) {
        this._values[RGBAColor.R_INDEX] = value;
    }
    get g() {
        return this._values[RGBAColor.G_INDEX];
    }
    set g(value) {
        this._values[RGBAColor.G_INDEX] = value;
    }
    get b() {
        return this._values[RGBAColor.B_INDEX];
    }
    set b(value) {
        this._values[RGBAColor.B_INDEX] = value;
    }
    get a() {
        return this._values[RGBAColor.A_INDEX];
    }
    set a(value) {
        this._values[RGBAColor.A_INDEX] = value;
    }
    set(r, g, b, a = 1) {
        this.r = r > 1 ? r / RGBAColor.DIVISOR : r;
        this.g = g > 1 ? g / RGBAColor.DIVISOR : g;
        this.b = b > 1 ? b / RGBAColor.DIVISOR : b;
        this.a = a > 1 ? a / RGBAColor.DIVISOR : a;
    }
    getAsRGBA() {
        return [
            RGBAColor.toINT(this.r),
            RGBAColor.toINT(this.g),
            RGBAColor.toINT(this.b),
            this.a,
        ];
    }
    getAsRGBAFloatArray() {
        return new Float32Array(this.getAsRGBA());
    }
    getAsRGB() {
        return [
            RGBAColor.toINT(this.r),
            RGBAColor.toINT(this.g),
            RGBAColor.toINT(this.b),
        ];
    }
    getAsRGBFloatArray() {
        return new Float32Array(this.getAsRGB());
    }
}
export { RGBAColor };
