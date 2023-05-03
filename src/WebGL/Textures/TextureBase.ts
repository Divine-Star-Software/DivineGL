import { WebGLEngine } from "../Engine/WebGLEngine.js";

type TextureData = {
 width: number;
 height: number;
 target: number;
 format: number;
 intervalFormat: number;
 storageFormat: number;
 flipY: boolean;
};

export class TextureBase {
 _webGLTexture: WebGLTexture;
 protected _created = false;

 protected _bound = false;

 _textureGLIndex = {
   index : 0,
   glIndex : 9
 }

 constructor(public engine: WebGLEngine, public data: TextureData) {
    const {index,glIndex} = this.engine._textureIndex.reserve();
    this._textureGLIndex.index = index;
    this._textureGLIndex.glIndex = glIndex;

 }
 create(data?: Uint8Array) {
  if (this._created) return;
  this._created = true;
  this._webGLTexture = this.engine.gl.createTexture()!;
  const gl = this.engine.gl;
  this.bind();
  if (data) this.update(data);
  if (this.data.flipY) {
   gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
  }
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
 }
 update(data: Uint8Array | Uint8ClampedArray) {
  this.bind();
  const gl = this.engine.gl;
  gl.texImage2D(
   this.data.target,
   0,
   this.data.intervalFormat,
   this.data.width,
   this.data.height,
   0,
   this.data.format,
   this.data.storageFormat,
   data
  );
 }

 bind() {
  if (this._bound) return;
  this._bound = true;
  this.engine.gl.activeTexture(this._textureGLIndex.glIndex);
  this.engine.gl.bindTexture(this.data.target, this._webGLTexture);
 }

 unBind() {
  if (!this._bound) return;
  this._bound = false;
 }

 delete() {
    this.engine._textureIndex.return(this._textureGLIndex.index)
 }
}
