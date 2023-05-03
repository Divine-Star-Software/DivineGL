export declare class Scalar {
    unitOfMeasurement: string;
    byteSize: 1 | 2 | 4 | 8;
    signed: boolean;
    type: "float" | "int";
    private _view;
    constructor(value?: number, unitOfMeasurement?: string, byteSize?: 1 | 2 | 4 | 8, signed?: boolean, type?: "float" | "int");
    get value(): number;
    set value(value: number);
    setUOM(uom: string): void;
    getUOMString(): string;
}
