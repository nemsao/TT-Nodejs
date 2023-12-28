

let promise1=new  Promise(async (res,rej)=>{
    var index=Math.round(Math.random())
    if(index==1){
        res("Sussecc")
    }else{
        rej("Fail to act on Promise 1")
    }
       
})
let promise2=new Promise(async (res,rej)=>{
    var index=Math.round(Math.random())
    if(index==1){
       res("Sussecc")
    }else{
        rej("Fail to act on Promise 2")
    }
       
})
Promise.all([promise1,promise2] ).then((s)=>{s.map(e=> console.log(e)) }).catch((error)=>console.log(error,"all "))
