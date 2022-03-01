/**
 * 编写自定义的webpack配置项，以后webpack打包编译的时候是按照自己配置的内容进行打包编译处理的（这个文件放置在项目的根目录下）
 *    文件名：webpack.config.js  / webpackfile.js
 * 
 * 1.webpack 本身是基于node开发的，所以配置项的模块处理规则参考commonJS规范完成
 */

const path = require('path')
// console.log(path.resolve())

const HtmlWebpackPlugin = require('html-webpack-plugin')
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')


// 配置多页面模版
const htmlWebpackPlugin = ['index', 'login'].map(item => {
    return new HtmlWebpackPlugin({
        // 模版的路径
        template:`./public/${item}.html`,
        // 编译后生成的文件名
        filename:`${item}.html`,
        // chunks:[item],
        // 指定当前页面的依赖项
        chunks:['jquery',item],
        // 是否把编译的资源文件导入页面中都设置hash值（清除强缓存）
        hash: true,
        // 把模版中的HTML代码也进行压缩编译（配置规则）
        minify: {
            // 标签之间的空格去掉
            collapseWhitespace: true,
            // 注释去掉
            removeComments:true,
            // 属性的双引号去掉
            removeAttributeQuotes:true,
            // 空属性去掉
            removeEmptyAttributes:true
        }
    })
})
module.exports = {
    // 设置编译的模式 development/production
    mode:'development',
    // 设置编译的入口文件（真实项目中一般开发的代码都要放置到src下）
    // entry:'./src/main.js',
    // 多入口文件配置 key:value
    entry:{
        index: './src/main.js',
        login:'./src/login.js',
        // 如果不想把jq合并在其他js中，想独立打包出来（多个页面公共的部分我们可以独立打包出来）
        jquery:'jquery'
    },
    // 设置编译的出口文件
    output: {
        // 编译后的文件名[hash]编译的时候会随机在名字中生成唯一的哈希值，以此保证每一次编译出来的文件是不一样的
        // filename:'bundle.js',
        // filename:'bundle.[hash].js',

        // 多入口文件配置出口文件
        filename: '[name].[hash].min.js',
        // 输出的目录(需要是绝对路径)
        path:path.resolve(__dirname, 'build')
    },
    // 在webpack中使用插件
    plugins: [
        // 配置指定的html页面模版(后期在编译的时候会把编译好的资源文件自动导入到我们的页面模版中)
        // new HtmlWebpackPlugin({
        //     // 模版的路径
        //     template:'./public/index.html',
        //     // 编译后生成的文件名
        //     filename:'index.html',
        //     // 是否把编译的资源文件导入页面中都设置hash值（清除强缓存）
        //     hash: true,
        //     // 把模版中的HTML代码也进行压缩编译（配置规则）
        //     minify: {
        //         // 标签之间的空格去掉
        //         collapseWhitespace: true,
        //         // 注释去掉
        //         removeComments:true,
        //         // 属性的双引号去掉
        //         removeAttributeQuotes:true,
        //         // 空属性去掉
        //         removeEmptyAttributes:true
        //     }
        // }),
        // 每一次打包都把之前打包的清空
        new CleanWebpackPlugin(),
        // 多入口文件页面模版配置
        ...htmlWebpackPlugin,
    ],
    // 配置webpack加载器loader
    module: {
        // 设置规则和处理方案 默认执行顺序，从右到左、从下向上
        rules: [
            {
                // 匹配哪些文件基于正则处理
                test:/\.(css|less)$/i,
                use: ['style-loader','css-loader','postcss-loader','less-loader']
            }
        ]
    }
    // 配置dev-server 编译后的结果放在计算机的内存中，并不会像之前的webpack一样，把编译后的东西放到build下,dev-server仅仅是
    // 在 开发模式下，随时编译并且预览的，项目要部署的时候，还是需要基于webpack编译打包的
    // devServer: {
    //     // web服务的端口号
    //     port: '3000',
    //     // 开启gzip压缩
    //     compress: true,
    //     // 指定资源访问路径
    //     contentBase:path.resolve(__dirname, 'dist'),
    //     // 自动打开浏览器
    //     open: true,
    //     // 开启热更新
    //     hot:true,
    //     // Proxy 跨域代理
    //     proxy:{
    //         '/': 'http://127.0.0.1:8888'
    //     }
    // }
}