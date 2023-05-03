export class ShaderProgram {
    engine;
    code;
    _program;
    constructor(engine, code) {
        this.engine = engine;
        this.code = code;
        const gl = engine.gl;
        const vertexShader = gl.createShader(gl.VERTEX_SHADER);
        gl.shaderSource(vertexShader, this.code.vertex);
        gl.compileShader(vertexShader);
        const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
        gl.shaderSource(fragmentShader, this.code.fragment);
        gl.compileShader(fragmentShader);
        const program = gl.createProgram();
        this._program = program;
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error(gl.getProgramInfoLog(program));
            console.log(gl.getShaderInfoLog(fragmentShader));
        }
    }
    _getUniformLocation(id) {
        return this.engine.gl.getUniformLocation(this._program, id);
    }
    _useProgram() {
        this.engine._shaderProgram.setActive(this);
        this.engine.gl.useProgram(this._program);
    }
    textures = {
        bind: (id, texture) => {
            this.engine.gl.uniform1i(this._getUniformLocation(id), texture._textureGLIndex.index);
        },
    };
    uniforms = {
        float: {
            set: (id, float) => {
                this._useProgram();
                this.engine.gl.uniform1f(this._getUniformLocation(id), float);
            },
            setVec2: (id, vector) => {
                this._useProgram();
                this.engine.gl.uniform2fv(this._getUniformLocation(id), vector.getArray());
            },
            setVec3: (id, vector) => {
                this._useProgram();
                this.engine.gl.uniform3fv(this._getUniformLocation(id), vector.getArray());
            },
            setVec4: (id, vector) => {
                this._useProgram();
                this.engine.gl.uniform4fv(this._getUniformLocation(id), vector.getArray());
            },
        },
        int: {
            set: (id, int) => {
                this._useProgram();
                this.engine.gl.uniform1i(this._getUniformLocation(id), int);
            },
            setVec2: (id, vector) => {
                this._useProgram();
                this.engine.gl.uniform2iv(this._getUniformLocation(id), vector.getArray());
            },
            setVec3: (id, vector) => {
                this._useProgram();
                this.engine.gl.uniform3iv(this._getUniformLocation(id), vector.getArray());
            },
            setVec4: (id, vector) => {
                this._useProgram();
                this.engine.gl.uniform4iv(this._getUniformLocation(id), vector.getArray());
            },
        },
        uint: {
            set: (id, uIint) => {
                this._useProgram();
                this.engine.gl.uniform1ui(this._getUniformLocation(id), uIint);
            },
            setVec2: (id, vector) => {
                this._useProgram();
                this.engine.gl.uniform2uiv(this._getUniformLocation(id), vector.getArray());
            },
            setVec3: (id, vector) => {
                this._useProgram();
                this.engine.gl.uniform3uiv(this._getUniformLocation(id), vector.getArray());
            },
            setVec4: (id, vector) => {
                this._useProgram();
                this.engine.gl.uniform4uiv(this._getUniformLocation(id), vector.getArray());
            },
        },
    };
}
