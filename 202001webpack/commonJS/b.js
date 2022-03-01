let x = 10
let y = 20
let A = require('./a')  // 第一次require a模块，会把a模块中的代码执行，创建的变量A就是把模块中module.exports导出的结果拷贝一份给变量
A.sum(x, y)


A = require('./a')  // 第二次require a模块，内部默认会看一下之前有没有导入过，如果导入过不会再把a代码重新执行，而是直接获取上一次拷贝的信息