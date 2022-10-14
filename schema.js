//2

const db=require("./db.js");//连接数据库
/** 定义元对象 */
const Schema=new db.Schema({
    id:{type:Number},
    name:{type:String},
    flag:{type:Boolean}
})

const schema=db.model("users",Schema);//根据元对象创建集合
module.exports=schema;
