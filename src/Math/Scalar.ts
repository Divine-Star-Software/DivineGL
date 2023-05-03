export class Scalar {
 private _view: ArrayBufferView;
 constructor(
  value :  number = 0,
  public unitOfMeasurement = "m",
  public byteSize: 1 | 2 | 4 | 8 = 4,
  public signed: boolean = true,
  public type: "float" | "int" = "float"
 ) {
  switch (byteSize) {
   case 1:
    signed ? (this._view = new Int8Array(1)) : (this._view = new Uint8Array(1));
    break;
   case 2:
    signed
     ? (this._view = new Int16Array(1))
     : (this._view = new Uint16Array(1));
    break;
   case 4:
    if (type == "float") {
     this._view = new Float32Array(1);
    } else {
     signed
      ? (this._view = new Int32Array(1))
      : (this._view = new Uint32Array(1));
    }
    break;
   case 8:
    this._view = new Float64Array(1);
    break;
  }
  this.value = value;
 }

 get value() {
  return (this._view as Uint8Array)[0];
 }
 set value(value: number) {
  (this._view as Uint8Array)[0] = value;
 }
 setUOM(uom: string) {
  this.unitOfMeasurement = uom;
 }
 getUOMString() {
  return `${this.value}${this.unitOfMeasurement}`;
 }
}
