import { CSSColor } from "../../Color/CSSColor.js";
import { CanvasFont } from "./CanvasFont.js";
export declare class CanvasStyle {
    font: CanvasFont;
    global: {
        alpha: number;
        compositeOperation: GlobalCompositeOperation;
    };
    stroke: CSSColor;
    fill: CSSColor;
    bgColor: CSSColor;
}
