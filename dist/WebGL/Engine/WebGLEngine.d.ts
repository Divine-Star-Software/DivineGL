import { ShaderProgram } from "../Shaders/ShaderProgram";
declare class WebGLComponentTypes {
    private gl;
    constructor(gl: WebGL2RenderingContext);
    get UNSIGNED_BYTE(): 5121;
    get BYTE(): 5120;
    get UNSIGNED_SHORT(): 5123;
    get SHORT(): 5122;
    get FLOAT(): 5126;
    get INT(): 5124;
}
declare class WebGLShaderTypes {
    private gl;
    constructor(gl: WebGL2RenderingContext);
    get VERTEX(): 35633;
    get FRAGMENT(): 35632;
}
declare class WebGLTextureTypes {
    private gl;
    constructor(gl: WebGL2RenderingContext);
    get TEXTURE_2D(): 3553;
    get TEXTURE_3D(): 32879;
    get TEXTURE_2D_ARRAY(): 35866;
}
declare class WebGLTextureFormats {
    private gl;
    constructor(gl: WebGL2RenderingContext);
    get RGBA(): 6408;
    get RGB(): 6407;
}
declare class WebGLSamplingModes {
    private gl;
    constructor(gl: WebGL2RenderingContext);
    get NEAREST(): 9728;
    get LINEAR(): 9729;
}
export declare class WebGLConstants {
    gl: WebGL2RenderingContext;
    COMPONENTS: WebGLComponentTypes;
    SHADERS: WebGLShaderTypes;
    TEXTURES: {
        FORMATS: WebGLTextureFormats;
        TARGETS: WebGLTextureTypes;
        SAMPLING_MODES: WebGLSamplingModes;
    };
    constructor(gl: WebGL2RenderingContext);
}
export declare class WebGLEngine {
    renderCanvas: HTMLCanvasElement;
    _suppourted: boolean;
    gl: WebGL2RenderingContext;
    static textureIndexStore: Set<number>;
    static textureGLIndexStore: Set<number>;
    CONSTANTS: WebGLConstants;
    constructor(renderCanvas: HTMLCanvasElement);
    _shaderProgram: {
        _currentShader: ShaderProgram | null;
        setActive(program: ShaderProgram): void;
        getActive(): ShaderProgram | null;
        release(): void;
    };
    _textureIndex: {
        reserve: () => {
            index: number;
            glIndex: number;
        };
        return: (index: number) => void;
    };
}
export {};
