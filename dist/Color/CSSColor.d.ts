import { RGBAColor } from "./Colors.js";
type CSSColorModes = keyof typeof CSSColor.colorModes;
type CSSColorStyleModes = "color" | "gradient" | "pattern";
export declare class CSSColor {
    static colorModes: {
        hex: (color: CSSColor) => string;
        rgb: (color: CSSColor) => string;
        rgba: (color: CSSColor) => string;
    };
    static getRGBAString(color: RGBAColor): string;
    static getRGBString(color: RGBAColor): string;
    static toHEX: (input: number) => string;
    static getAsHEXString(color: RGBAColor): string;
    colorMode: CSSColorModes;
    private _mode;
    get stylMode(): CSSColorStyleModes;
    set stylMode(mode: CSSColorStyleModes);
    constructor(r?: number, g?: number, b?: number, a?: number, colorMode?: CSSColorModes);
    _gradient: CanvasGradient | null;
    _pattern: CanvasGradient | null;
    color: RGBAColor;
    setStyleMode(mode: CSSColorStyleModes): void;
    setColorMode(mode: keyof typeof CSSColor.colorModes): void;
    get(): string | CanvasGradient;
    loadIn(color: CSSColor): void;
}
export {};
