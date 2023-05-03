export class Scalar {
    unitOfMeasurement;
    byteSize;
    signed;
    type;
    _view;
    constructor(value = 0, unitOfMeasurement = "m", byteSize = 4, signed = true, type = "float") {
        this.unitOfMeasurement = unitOfMeasurement;
        this.byteSize = byteSize;
        this.signed = signed;
        this.type = type;
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
                }
                else {
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
        return this._view[0];
    }
    set value(value) {
        this._view[0] = value;
    }
    setUOM(uom) {
        this.unitOfMeasurement = uom;
    }
    getUOMString() {
        return `${this.value}${this.unitOfMeasurement}`;
    }
}
