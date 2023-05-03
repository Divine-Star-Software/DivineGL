import type { Vector2, Vector3, Vector4 } from "Math/Vectors";
import type { WebGLEngine } from "../Engine/WebGLEngine";
import { TextureBase } from "../Textures/TextureBase.js";
export declare class ShaderProgram {
    engine: WebGLEngine;
    code: {
        vertex: string;
        fragment: string;
    };
    _program: WebGLProgram;
    constructor(engine: WebGLEngine, code: {
        vertex: string;
        fragment: string;
    });
    _getUniformLocation(id: string): WebGLUniformLocation | null;
    _useProgram(): void;
    textures: {
        bind: (id: string, texture: TextureBase) => void;
    };
    uniforms: {
        float: {
            set: (id: string, float: number) => void;
            setVec2: (id: string, vector: Vector2) => void;
            setVec3: (id: string, vector: Vector3) => void;
            setVec4: (id: string, vector: Vector4) => void;
        };
        int: {
            set: (id: string, int: number) => void;
            setVec2: (id: string, vector: Vector2) => void;
            setVec3: (id: string, vector: Vector3) => void;
            setVec4: (id: string, vector: Vector4) => void;
        };
        uint: {
            set: (id: string, uIint: number) => void;
            setVec2: (id: string, vector: Vector2) => void;
            setVec3: (id: string, vector: Vector3) => void;
            setVec4: (id: string, vector: Vector4) => void;
        };
    };
}
