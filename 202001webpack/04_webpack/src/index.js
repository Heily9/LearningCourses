/**
 * 作为当前项目的入口（最后会把需要用到的模块全部合并打包到这里）
 */

import { minus } from './b'
const { plus } = require('./a')

console.log(plus(20, 10))
console.log(minus(20, 10))