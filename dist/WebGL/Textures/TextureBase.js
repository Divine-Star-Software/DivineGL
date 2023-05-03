export class TextureBase {
    engine;
    data;
    _webGLTexture;
    _created = false;
    _bound = false;
    _textureGLIndex = {
        index: 0,
        glIndex: 9
    };
    constructor(engine, data) {
        this.engine = engine;
        this.data = data;
        const { index, glIndex } = this.engine._textureIndex.reserve();
        this._textureGLIndex.index = index;
        this._textureGLIndex.glIndex = glIndex;
    }
    create(data) {
        if (this._created)
            return;
        this._created = true;
        this._webGLTexture = this.engine.gl.createTexture();
        const gl = this.engine.gl;
        this.bind();
        if (data)
            this.update(data);
        if (this.data.flipY) {
            gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        }
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    }
    update(data) {
        this.bind();
        const gl = this.engine.gl;
        gl.texImage2D(this.data.target, 0, this.data.intervalFormat, this.data.width, this.data.height, 0, this.data.format, this.data.storageFormat, data);
    }
    bind() {
        if (this._bound)
            return;
        this._bound = true;
        this.engine.gl.activeTexture(this._textureGLIndex.glIndex);
        this.engine.gl.bindTexture(this.data.target, this._webGLTexture);
    }
    unBind() {
        if (!this._bound)
            return;
        this._bound = false;
    }
    delete() {
        this.engine._textureIndex.return(this._textureGLIndex.index);
    }
}
