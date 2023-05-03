export class Context2D {
    canvas = document.createElement("canvas");
    ctx;
    constructor() {
        const context = this.canvas.getContext("2d", {
            willReadFrequently: true,
        });
        if (!context)
            return;
        this.ctx = context;
    }
    getContext() {
        return this.ctx;
    }
    _resize() { }
    setSize(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
        this._resize();
    }
    _dirty = false;
    setDirty(dirty) {
        this._dirty = dirty;
    }
    isDirty() {
        return this._dirty;
    }
    get width() {
        return this.canvas.width;
    }
    set width(width) {
        this.canvas.width = width;
        this._resize();
    }
    get height() {
        return this.canvas.height;
    }
    set height(height) {
        this.canvas.height = height;
        this._resize();
    }
    getData() {
        return this.ctx.getImageData(0, 0, this.width, this.height);
    }
    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }
    measureText(text, font) {
        font.setFont(this);
        return this.ctx.measureText(text);
    }
}
