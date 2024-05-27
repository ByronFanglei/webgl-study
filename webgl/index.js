const canvas = document.getElementById("webgl");
const gl = canvas.getContext("webgl");

// 3d 清空画布
const clearCanvas = () => {
  gl.clearColor(0, 0, 0, 1.0) // rgba
  gl.clear(gl.COLOR_BUFFER_BIT)
}

// 画一个点
// 定义点位置vertexShader、填充信息fragmentShader， 内部代码类似于c
let vertexSource = `
  void main() {
    gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
    gl_PointSize = 10.0;
  }
`;
let fragmentSource = `
  void main() {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
  }
`;
// 创建shader
let vertexShader = gl.createShader(gl.VERTEX_SHADER);
let fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
// 绑定shader
gl.shaderSource(vertexShader, vertexSource);
gl.shaderSource(fragmentShader, fragmentSource);
// 编译shader
gl.compileShader(vertexShader)
gl.compileShader(fragmentShader)
// 定义program
let program = gl.createProgram()
// 绑定shader
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
// 连接program
gl.linkProgram(program)
gl.useProgram(program)

clearCanvas()
// 画点
gl.drawArrays(gl.POINTS, 0, 1)