import { RGBAColor } from "./Colors.js";
class CSSColor {
    static colorModes = {
        hex: (color) => CSSColor.getAsHEXString(color.color),
        rgb: (color) => CSSColor.getRGBString(color.color),
        rgba: (color) => CSSColor.getRGBAString(color.color),
    };
    static getRGBAString(color) {
        const [r, g, b, a] = color.getAsRGBA();
        return `rgba(${r >> 0},${g >> 0},${b >> 0},${a.toFixed(2)})`;
    }
    static getRGBString(color) {
        const [r, g, b] = color.getAsRGBA();
        return `rgb(${r >> 0},${g >> 0},${b >> 0})`;
    }
    static toHEX = (input) => {
        if (input < 1)
            input = input * 0xff;
        return !input ? "00" : Number(input).toString(16);
    };
    static getAsHEXString(color) {
        const [r, g, b] = color.getAsRGBA();
        return `#${CSSColor.toHEX(r >> 0)}${CSSColor.toHEX(g >> 0)}${CSSColor.toHEX(b >> 0)}`;
    }
    colorMode;
    _mode = "color";
    get stylMode() {
        return this._mode;
    }
    set stylMode(mode) {
        if (mode == "gradient" && !this._gradient) {
            throw new Error(`Gradient must be set to use 'gradient' CSS color mode.`);
        }
        if (mode == "pattern" && !this._pattern) {
            throw new Error(`Gradient must be set to use 'gradient' CSS color mode.`);
        }
        this._mode = mode;
    }
    constructor(r = 0, g = r, b = g, a = 1, colorMode = "hex") {
        this.color.set(r, g, b, a);
        this.colorMode = colorMode;
    }
    _gradient = null;
    _pattern = null;
    color = new RGBAColor();
    setStyleMode(mode) {
        this.stylMode = mode;
    }
    setColorMode(mode) {
        this.colorMode = mode;
    }
    get() {
        if (this._gradient && this.stylMode == "gradient")
            return this._gradient;
        if (this._pattern && this.stylMode == "pattern")
            return this._pattern;
        return CSSColor.colorModes[this.colorMode](this);
    }
    loadIn(color) {
        this.color.r = color.color.r;
        this.color.g = color.color.g;
        this.color.b = color.color.b;
        this.color.a = color.color.a;
        this.colorMode = color.colorMode;
    }
}
export { CSSColor };
