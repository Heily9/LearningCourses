/**
 * 模块化的发展史：
 * - 单例设计模式
 * - AMD require.js
 * - CMD
 * - CommonJS
 *  -- 在CommonJS模块中，如果require了一个模块，那就相当于执行了该文件的代码并最终获取到模块输出的moudule.exports对象的一份拷贝，并且重复引入的模块并不会重复执行，
 *     再次获取模块只会获得之前获取到的模块的拷贝
 * - ES6 Module --- 阮一峰
 */