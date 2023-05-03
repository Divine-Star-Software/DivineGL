import { ShaderProgram } from "../Shaders/ShaderProgram";

class WebGLComponentTypes {
 constructor(private gl: WebGL2RenderingContext) {}
 get UNSIGNED_BYTE() {
  return this.gl.UNSIGNED_BYTE;
 }
 get BYTE() {
  return this.gl.BYTE;
 }
 get UNSIGNED_SHORT() {
  return this.gl.UNSIGNED_SHORT;
 }
 get SHORT() {
  return this.gl.SHORT;
 }
 get FLOAT() {
  return this.gl.FLOAT;
 }
 get INT() {
  return this.gl.INT;
 }
}
class WebGLShaderTypes {
 constructor(private gl: WebGL2RenderingContext) {}
 get VERTEX() {
  return this.gl.VERTEX_SHADER;
 }
 get FRAGMENT() {
  return this.gl.FRAGMENT_SHADER;
 }
}
class WebGLTextureTypes {
 constructor(private gl: WebGL2RenderingContext) {}
 get TEXTURE_2D() {
  return this.gl.TEXTURE_2D;
 }
 get TEXTURE_3D() {
  return this.gl.TEXTURE_3D;
 }
 get TEXTURE_2D_ARRAY() {
  return this.gl.TEXTURE_2D_ARRAY;
 }
}
class WebGLTextureFormats {
 constructor(private gl: WebGL2RenderingContext) {}
 get RGBA() {
  return this.gl.RGBA;
 }
 get RGB() {
  return this.gl.RGB;
 }
}
class WebGLSamplingModes {
 constructor(private gl: WebGL2RenderingContext) {}
 get NEAREST() {
  return this.gl.NEAREST;
 }
 get LINEAR() {
  return this.gl.LINEAR;
 }
}

export class WebGLConstants {
 COMPONENTS: WebGLComponentTypes;
 SHADERS: WebGLShaderTypes;
 TEXTURES: {
  FORMATS: WebGLTextureFormats;
  TARGETS: WebGLTextureTypes;
  SAMPLING_MODES: WebGLSamplingModes;
 };

 constructor(public gl: WebGL2RenderingContext) {
  this.COMPONENTS = new WebGLComponentTypes(gl);
  this.SHADERS = new WebGLShaderTypes(gl);
  this.TEXTURES = {
   TARGETS: new WebGLTextureTypes(gl),
   SAMPLING_MODES: new WebGLSamplingModes(gl),
   FORMATS: new WebGLTextureFormats(gl),
  };
 }
}

export class WebGLEngine {
 _suppourted = true;
 gl: WebGL2RenderingContext;
 static textureIndexStore = new Set<number>();
 static textureGLIndexStore = new Set<number>();
 CONSTANTS: WebGLConstants;

 constructor(public renderCanvas: HTMLCanvasElement) {
  const gl = renderCanvas.getContext("webgl2");
  if (gl === null) {
   console.warn("WebGL 2 not suppourted");
   this._suppourted = false;
   return;
  }
  this.CONSTANTS = new WebGLConstants(gl);
  this.gl = gl;
 }

 _shaderProgram = {
  _currentShader: <ShaderProgram | null>null,
  setActive(program: ShaderProgram) {
   this._currentShader = program;
  },
  getActive() {
   return this._currentShader;
  },
  release() {
   this._currentShader = null;
  },
 };

 _textureIndex = {
  reserve: () => {
   let i = 0;
   let index = <number>(this as any).gl[`TEXTURE${i}`];
   while (WebGLEngine.textureIndexStore.has(index)) {
    i = ((this.gl.MAX_TEXTURE_IMAGE_UNITS - 1) * Math.random()) >> 0;
    index = <number>(this as any).gl[`TEXTURE${i}`];
   }
   WebGLEngine.textureGLIndexStore.add(i);
   WebGLEngine.textureIndexStore.add(index);
   return { index: i, glIndex: index };
  },
  return: (index: number) => {
   WebGLEngine.textureIndexStore.delete(index);
  },
 };
}
