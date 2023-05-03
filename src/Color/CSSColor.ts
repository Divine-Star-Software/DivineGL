import { RGBAColor } from "./Colors.js";

type CSSColorModes = keyof typeof CSSColor.colorModes;
type CSSColorStyleModes = "color" | "gradient" | "pattern";
export class CSSColor {
 static colorModes = {
  hex: (color: CSSColor) => CSSColor.getAsHEXString(color.color),
  rgb: (color: CSSColor) => CSSColor.getRGBString(color.color),
  rgba: (color: CSSColor) => CSSColor.getRGBAString(color.color),
 };
 static getRGBAString(color: RGBAColor) {
  const [r, g, b, a] = color.getAsRGBA();
  return `rgba(${r >> 0},${g >> 0},${b >> 0},${a.toFixed(2)})`;
 }
 static getRGBString(color: RGBAColor) {
  const [r, g, b] = color.getAsRGBA();
  return `rgb(${r >> 0},${g >> 0},${b >> 0})`;
 }
 static toHEX = (input: number) => {
  if (input < 1) input = input * 0xff;
  return !input ? "00" : Number(input).toString(16);
 };
 static getAsHEXString(color: RGBAColor) {
  const [r, g, b] = color.getAsRGBA();
  return `#${CSSColor.toHEX(r >> 0)}${CSSColor.toHEX(g >> 0)}${CSSColor.toHEX(
   b >> 0
  )}`;
 }
 colorMode: CSSColorModes;

 private _mode: CSSColorStyleModes = "color";
 get stylMode() {
  return this._mode;
 }
 set stylMode(mode: CSSColorStyleModes) {
  if (mode == "gradient" && !this._gradient) {
   throw new Error(`Gradient must be set to use 'gradient' CSS color mode.`);
  }
  if (mode == "pattern" && !this._pattern) {
   throw new Error(`Gradient must be set to use 'gradient' CSS color mode.`);
  }
  this._mode = mode;
 }
 constructor(r = 0, g = r, b = g, a = 1, colorMode: CSSColorModes = "hex") {
  this.color.set(r, g, b, a);
  this.colorMode = colorMode;
 }

 _gradient: CanvasGradient | null = null;
 _pattern: CanvasGradient | null = null;

 color = new RGBAColor();

 setStyleMode(mode: CSSColorStyleModes) {
  this.stylMode = mode;
 }
 setColorMode(mode: keyof typeof CSSColor.colorModes) {
  this.colorMode = mode;
 }

 get() {
  if (this._gradient && this.stylMode == "gradient") return this._gradient;
  if (this._pattern && this.stylMode == "pattern") return this._pattern;
  return CSSColor.colorModes[this.colorMode](this);
 }

 loadIn(color: CSSColor) {
  this.color.r = color.color.r;
  this.color.g = color.color.g;
  this.color.b = color.color.b;
  this.color.a = color.color.a;
  this.colorMode = color.colorMode;
  
 }
}
