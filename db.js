//1


const mongoose = require("mongoose");
// 连接mongodb---trace数据库，如果没有就会自动建立，反正最开始我没在mongodb建立trace，自动就有了
mongoose.connect("mongodb://127.0.0.1:27017/trace");

mongoose.connection.on("connected",()=>{
    console.log("连接成功");
});
mongoose.connection.on("disconnected",()=>{
    console.log("连接断开");
});
mongoose.connection.on("error",()=>{
    console.log("连接失败");
});
// 暴露连接mongo之后的mongoose对象
module.exports = mongoose;