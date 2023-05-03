import { Vector2 } from "../Math/Vectors.js";
import { Context2D } from "./Context2D.js";
import { CanvasStyle } from "./Style/CanvasStyle.js";
declare class CanvasTextPainter {
    painter: CanvasPainter;
    ctx: CanvasRenderingContext2D;
    constructor(painter: CanvasPainter);
    fill(text: string): CanvasPainter;
    stroke(text: string): CanvasPainter;
}
declare class CanvasRectPainter {
    painter: CanvasPainter;
    ctx: CanvasRenderingContext2D;
    constructor(painter: CanvasPainter);
    dimensions: Vector2;
    setDimensionn(width: number, height: number): this;
    fillAndStroke(): void;
    fill(): CanvasPainter;
    stroke(): CanvasPainter;
    clear(): CanvasPainter;
}
export declare class CanvasPainter {
    contex: Context2D;
    position: Vector2;
    defaultStyle: CanvasStyle;
    style: CanvasStyle;
    rect: CanvasRectPainter;
    text: CanvasTextPainter;
    constructor(contex: Context2D);
    setPosition(x: number, y: number): this;
    setAlpha(value: number): this;
    setStyle(style?: CanvasStyle): this;
    clearLine(fontSize: number, width: number): this;
}
export {};
