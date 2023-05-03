abstract class VectorBase {
 static X_INDEX = 0;
 static Y_INDEX = 1;
 static Z_INDEX = 2;
 static W_INDEX = 3;
 protected abstract _values: Float32Array;

 get x() {
  return this._values[Vector2.X_INDEX];
 }
 set x(value: number) {
  this._values[Vector2.X_INDEX] = value;
 }
 get y() {
  return this._values[Vector2.Y_INDEX];
 }
 set y(value: number) {
  this._values[Vector2.Y_INDEX] = value;
 }

 getArray(){
    return this._values;
 }
}

export class Vector2 extends VectorBase {
 static STRIDE = 2;
 protected _values = new Float32Array(Vector2.STRIDE);
 constructor(x?: number, y?: number) {
  super();
  this.x = x ? x : 0;
  this.y = y ? y : 0;
 }

 set(x: number, y: number) {
  this.x = x;
  this.y = y;
 }
}

export class Vector3 extends VectorBase {
 static STRIDE = 3;
 protected _values = new Float32Array(Vector3.STRIDE);
 constructor(x?: number, y?: number, z?: number) {
  super();
  this.x = x ? x : 0;
  this.y = y ? y : 0;
  this.z = z ? z : 0;
 }
 get z() {
  return this._values[Vector3.Z_INDEX];
 }
 set z(value: number) {
  this._values[Vector3.Z_INDEX] = value;
 }

 set(x: number, y: number, z: number) {
  this.x = x;
  this.y = y;
  this.z = z;
 }
}

export class Vector4 extends VectorBase {
 static STRIDE = 4;
 protected _values = new Float32Array(Vector3.STRIDE);
 constructor(x?: number, y?: number, z?: number, w?: number) {
  super();
  this.x = x ? x : 0;
  this.y = y ? y : 0;
  this.z = z ? z : 0;
  this.w = w ? w : 0;
 }
 get z() {
  return this._values[Vector4.Z_INDEX];
 }
 set z(value: number) {
  this._values[Vector4.Z_INDEX] = value;
 }
 get w() {
  return this._values[Vector4.W_INDEX];
 }
 set w(value: number) {
  this._values[Vector4.W_INDEX] = value;
 }

 set(x: number, y: number, z: number, w: number) {
  this.x = x;
  this.y = y;
  this.z = z;
  this.w = w;
 }
}
