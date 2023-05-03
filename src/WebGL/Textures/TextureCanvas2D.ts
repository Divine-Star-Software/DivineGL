import { Context2D } from "../../2D/Context2D.js";
import { WebGLEngine } from "../Engine/WebGLEngine.js";
import { TextureBase } from "./TextureBase.js";

/**
 *# Texture Canvas 2D
 * A web gl texture connected to a 2D render context.
 */
export class TextureCanvas2D {
 texture: TextureBase;
 
 constructor(public engine: WebGLEngine, public context2D: Context2D) {
  this.texture = new TextureBase(engine, {
   target: engine.CONSTANTS.TEXTURES.TARGETS.TEXTURE_2D,
   format: engine.CONSTANTS.TEXTURES.FORMATS.RGBA,
   storageFormat: engine.CONSTANTS.COMPONENTS.UNSIGNED_BYTE,
   intervalFormat: engine.CONSTANTS.TEXTURES.FORMATS.RGBA,
   width: context2D.width,
   height: context2D.height,
   flipY: true,
  });
 }

 create() {
  this.texture.create();
 }

 update() {
  if (!this.context2D.isDirty()) return false;
  this.texture.update(this.context2D.getData().data);
  this.context2D.setDirty(false);
  return true;
 }
}
