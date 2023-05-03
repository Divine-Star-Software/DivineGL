class WebGLComponentTypes {
    gl;
    constructor(gl) {
        this.gl = gl;
    }
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
    gl;
    constructor(gl) {
        this.gl = gl;
    }
    get VERTEX() {
        return this.gl.VERTEX_SHADER;
    }
    get FRAGMENT() {
        return this.gl.FRAGMENT_SHADER;
    }
}
class WebGLTextureTypes {
    gl;
    constructor(gl) {
        this.gl = gl;
    }
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
    gl;
    constructor(gl) {
        this.gl = gl;
    }
    get RGBA() {
        return this.gl.RGBA;
    }
    get RGB() {
        return this.gl.RGB;
    }
}
class WebGLSamplingModes {
    gl;
    constructor(gl) {
        this.gl = gl;
    }
    get NEAREST() {
        return this.gl.NEAREST;
    }
    get LINEAR() {
        return this.gl.LINEAR;
    }
}
export class WebGLConstants {
    gl;
    COMPONENTS;
    SHADERS;
    TEXTURES;
    constructor(gl) {
        this.gl = gl;
        this.COMPONENTS = new WebGLComponentTypes(gl);
        this.SHADERS = new WebGLShaderTypes(gl);
        this.TEXTURES = {
            TARGETS: new WebGLTextureTypes(gl),
            SAMPLING_MODES: new WebGLSamplingModes(gl),
            FORMATS: new WebGLTextureFormats(gl),
        };
    }
}
class WebGLEngine {
    renderCanvas;
    _suppourted = true;
    gl;
    static textureIndexStore = new Set();
    static textureGLIndexStore = new Set();
    CONSTANTS;
    constructor(renderCanvas) {
        this.renderCanvas = renderCanvas;
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
        _currentShader: null,
        setActive(program) {
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
            let index = this.gl[`TEXTURE${i}`];
            while (WebGLEngine.textureIndexStore.has(index)) {
                i = ((this.gl.MAX_TEXTURE_IMAGE_UNITS - 1) * Math.random()) >> 0;
                index = this.gl[`TEXTURE${i}`];
            }
            WebGLEngine.textureGLIndexStore.add(i);
            WebGLEngine.textureIndexStore.add(index);
            return { index: i, glIndex: index };
        },
        return: (index) => {
            WebGLEngine.textureIndexStore.delete(index);
        },
    };
}
export { WebGLEngine };
