import { CSSColor } from "../../Color/CSSColor.js";
import { Scalar } from "../../Math/Scalar.js";
import { Context2D } from "../Context2D.js";
export declare class CanvasFont {
    family: string;
    size: Scalar;
    padding: Scalar;
    kerning: CanvasFontKerning;
    mode: string;
    color: CSSColor;
    constructor();
    getFontString(): string;
    setFont(context: Context2D): void;
}
