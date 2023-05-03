import { CSSColor } from "../../Color/CSSColor.js";
import { CanvasFont } from "./CanvasFont.js";

export class CanvasStyle {
 font = new CanvasFont();
 global = {
  alpha: 1,
  compositeOperation: <GlobalCompositeOperation>"source-over",
 };

 stroke = new CSSColor();
 fill = new CSSColor();
 bgColor = new CSSColor(0,0,0,0,"rgba");
}
