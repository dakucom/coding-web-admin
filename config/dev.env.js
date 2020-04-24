'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
    // 问题，后端有超过一个的服务地址，这里就没有办法直接使用绝对地址
    // 前端是同一调用，反向代理
module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    BASE_API: '"http://localhost:8210"',
    OSS_PATH: '"dakuzai-edu.oss-cn-beijing.aliyuncs.com"'
})