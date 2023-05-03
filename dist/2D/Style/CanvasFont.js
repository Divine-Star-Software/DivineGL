import { CSSColor } from "../../Color/CSSColor.js";
import { Scalar } from "../../Math/Scalar.js";
export class CanvasFont {
    family = "Consolas";
    size = new Scalar(16, "px");
    padding = new Scalar(8, "px");
    kerning = "none";
    mode = "none";
    color = new CSSColor();
    constructor() {
        this.color.colorMode = "hex";
    }
    getFontString() {
        return `${this.mode == "none" ? "" : this.mode} ${this.size.getUOMString()} ${this.family}`.trim();
    }
    setFont(context) {
        const ctx = context.getContext();
        ctx.fillStyle = this.color.get();
        ctx.strokeStyle = this.color.get();
        ctx.font = this.getFontString();
        ctx.fontKerning = this.kerning;
    }
}
