//3

module.exports={
    /** 查询方法 */
	get(name,where={},keys={}){
        return new Promise((res,rej)=>{
            name.find(where,keys,(err,data)=>{
				if(err){
                    rej(err)
                }else{
					res(data)
                }
            })
        })
    },
    /** 增加方法 */
    add(name,data){
		return new Promise((res,rej)=>{
			name.insertMany(data,err=>{
                if(err){
					rej(err)
                }else{
					res()
                }
            })
        })
    },
    /** 删除 */
    delete(name,id){
		return new Promise((res,rej)=>{
            const data=name.findOne({id:id})
			name.remove(data,err=>{
                if(err){
					rej(err)
                }else{
					res()
                }
            })
        })
    },
    /** 更新 */
    update(name,data){
		return new Promise((res,rej)=>{
            const oldData=name.findOne({id:data.id})
			name.updateMany(oldData,data,err=>{
                if(err){
					rej(err)
                }else{
					res()
                }
            })
        })
    }
}
