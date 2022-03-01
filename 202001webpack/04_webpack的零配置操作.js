/**
 * 
 * 1.在当前项目中打开窗口
 *  - npm init -y (项目目录名称不能出现中文 大写字母 特殊符号)
 *  - npm i webpack webpack-cli --save-dev
 * 
 * 2.零配置使用：
 * webpack默认会把当前项目src目录下的文件进行打包编译（默认编译的文件名是index.js），编译到dist文件
 * 目录下(合并打包后的文件名是main.js)(webpack编译代码过程中支持commonJS规范和ES6Module规范)
 * 
 * - src 当前项目开发的源代码
 * - dist 编译后的文件（未来部署到服务器上的代码）
 */