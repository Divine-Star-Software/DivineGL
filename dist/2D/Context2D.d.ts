import { CanvasFont } from "./Style/CanvasFont.js";
export declare class Context2D {
    canvas: HTMLCanvasElement;
    private ctx;
    constructor();
    getContext(): CanvasRenderingContext2D;
    _resize(): void;
    setSize(width: number, height: number): void;
    _dirty: boolean;
    setDirty(dirty: boolean): void;
    isDirty(): boolean;
    get width(): number;
    set width(width: number);
    get height(): number;
    set height(height: number);
    getData(): ImageData;
    clear(): void;
    measureText(text: string, font: CanvasFont): TextMetrics;
}
