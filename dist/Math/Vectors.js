class VectorBase {
    static X_INDEX = 0;
    static Y_INDEX = 1;
    static Z_INDEX = 2;
    static W_INDEX = 3;
    get x() {
        return this._values[Vector2.X_INDEX];
    }
    set x(value) {
        this._values[Vector2.X_INDEX] = value;
    }
    get y() {
        return this._values[Vector2.Y_INDEX];
    }
    set y(value) {
        this._values[Vector2.Y_INDEX] = value;
    }
    getArray() {
        return this._values;
    }
}
class Vector2 extends VectorBase {
    static STRIDE = 2;
    _values = new Float32Array(Vector2.STRIDE);
    constructor(x, y) {
        super();
        this.x = x ? x : 0;
        this.y = y ? y : 0;
    }
    set(x, y) {
        this.x = x;
        this.y = y;
    }
}
export { Vector2 };
class Vector3 extends VectorBase {
    static STRIDE = 3;
    _values = new Float32Array(Vector3.STRIDE);
    constructor(x, y, z) {
        super();
        this.x = x ? x : 0;
        this.y = y ? y : 0;
        this.z = z ? z : 0;
    }
    get z() {
        return this._values[Vector3.Z_INDEX];
    }
    set z(value) {
        this._values[Vector3.Z_INDEX] = value;
    }
    set(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
export { Vector3 };
class Vector4 extends VectorBase {
    static STRIDE = 4;
    _values = new Float32Array(Vector3.STRIDE);
    constructor(x, y, z, w) {
        super();
        this.x = x ? x : 0;
        this.y = y ? y : 0;
        this.z = z ? z : 0;
        this.w = w ? w : 0;
    }
    get z() {
        return this._values[Vector4.Z_INDEX];
    }
    set z(value) {
        this._values[Vector4.Z_INDEX] = value;
    }
    get w() {
        return this._values[Vector4.W_INDEX];
    }
    set w(value) {
        this._values[Vector4.W_INDEX] = value;
    }
    set(x, y, z, w) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }
}
export { Vector4 };
