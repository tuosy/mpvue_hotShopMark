// 引入exporess框架
var express = require('express');

// 本地读写
// const fs = require('fs');
//引入路由模块
const api = require('./src/routes/api')
// 通过expres()函数，创建app对象
var app = express();
// const md5 = require('md5')
// 添加http解析
const bodyParser = require('body-parser');
// 添加json解析
app.use(bodyParser.json({ limit: '1mb' }));

// 解决跨域
const cors = require('cors');
app.use(cors());

// 设置端口，启动服务器
app.listen(3000, function () {
    console.log("正在启动3000……");
});

app.use('/', (req, res, next) => {
    console.log(req.url);
    next();
})
app.use('/api', api)
// 自动遍历所有接口模块
// 最后我们访问的地址：/api/home(接口)
// fs.readdirSync：该方法将返回一个包含“指定目录下所有文件名称”的数组对象
// const routePath = './src/routes';
// fs.readdirSync(routePath).forEach(fileName => {
//     console.log(fileName);
//     app.use('/api/' + fileName.split('.')[0], require(routePath + '/' + fileName));
// })