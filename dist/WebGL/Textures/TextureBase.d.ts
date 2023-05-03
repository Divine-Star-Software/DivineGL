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
export declare class TextureBase {
    engine: WebGLEngine;
    data: TextureData;
    _webGLTexture: WebGLTexture;
    protected _created: boolean;
    protected _bound: boolean;
    _textureGLIndex: {
        index: number;
        glIndex: number;
    };
    constructor(engine: WebGLEngine, data: TextureData);
    create(data?: Uint8Array): void;
    update(data: Uint8Array | Uint8ClampedArray): void;
    bind(): void;
    unBind(): void;
    delete(): void;
}
export {};
