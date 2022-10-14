//5,终端启动后端服务命令：node app.js
/** 创建服务 */
const express = require("express");
const app = express();
/** 设置跨域访问 */
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// 加入接口
const api = require("./api");
app.use("/api", api);
app.listen(3001, () => console.log('服务器开启成功'));