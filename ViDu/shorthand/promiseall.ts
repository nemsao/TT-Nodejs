

let promise=new Promise((res,rej)=>{
    var index=Math.round(Math.random())
    if(index==1){
        res("Sussecc")
    }else{
        rej("Fail to ")
    }
       
})
promise.then((s)=>{console.log(s) }).catch((error)=>console.log(error))
