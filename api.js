//4

var express=require("express");
var router =express.Router();//引入模板的路由模块
const schema=require("./schema.js");//引入集合
const sql=require("./sql.js");//引入封装方法

/** 获取数据接口 */
router.get("/get",function(req,res){
	const id=req.query.id;
    sql.get(schema,{id:id}).then(data=>{
        res.send({
            Success:true,
            title:"获取成功",
            data:data,
            status: 1,
        })
    }).catch(err=>{
		res.send({
			Success:false,
            title:err,
            data:'失败'
        })
    })
})

/** 添加数据接口 */
router.post("/add",function(req,res){
    //返回状态码
    // res.status(200).send()
    
	const data=req.body;
    //终端打印数据
    console.log(123,data)
    //此处可对data数据进行处理
    sql.add(schema,data).then((data)=>{
        res.send({
            Success:true,
            title:"插入成功",
            data:data
        })
        // res.redirect("/");//重定向
        // res.status(500).send()
    })
})
/** 删除数据接口 */
router.delete("/delete/:id",function(req,res){
    const id = req.params.id;
    sql.delete(schema,id).then(()=>{
        res.send({
            Success:true,
            title:"删除成功",
        })
    })
})
/** 更新数据接口 */
router.post("/update",function(req,res){
    const data=req.body;
    sql.update(schema,data).then(()=>{
        res.send({
            Success:true,
            title:"更新成功",
        })
    })
})

module.exports = router;