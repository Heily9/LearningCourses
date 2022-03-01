/**
 * ES6Module新增的模块导入导出规范（不同于AMD 和 CMD）,它是静态编译的
 *  -- 动态编译：代码执行到具体位置的时候才会进行模块的导入导出
 *  -- 静态编译：代码还没有执行，就按照依赖的关系把模块导入导出和编译好了
 * 
 * 模块的导入都要放到代码执行的最前面，浏览器不能直接识别，需要先进行编译才可以（webpack可以完成编译）
 */
export function sum(x, y) {
    return x + y
}

export let n = 10