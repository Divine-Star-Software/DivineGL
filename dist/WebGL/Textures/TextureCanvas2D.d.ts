import { Context2D } from "../../2D/Context2D.js";
import { WebGLEngine } from "../Engine/WebGLEngine.js";
import { TextureBase } from "./TextureBase.js";
/**
 *# Texture Canvas 2D
 * A web gl texture connected to a 2D render context.
 */
export declare class TextureCanvas2D {
    engine: WebGLEngine;
    context2D: Context2D;
    texture: TextureBase;
    constructor(engine: WebGLEngine, context2D: Context2D);
    create(): void;
    update(): boolean;
}
