/**
 *  开发环境下的配置项
 */


const path = require('path')

module.exports = {
    // 设置编译的模式 development/production
    mode:'development',
    // 设置编译的入口文件（真实项目中一般开发的代码都要放置到src下）
    entry:'./src/main.js',
    // 设置编译的出口文件
    output: {
        // 编译后的文件名[hash]编译的时候会随机在名字中生成唯一的哈希值，以此保证每一次编译出来的文件是不一样的
        // filename:'bundle.js',
        filename:'bundle.js',
        // 输出的目录(需要是绝对路径)
        path:path.resolve(__dirname, 'build')
    }
}