

let arr:number[]=[1,2,3,4,1,1,2,3,4,5];
let kq:number[]=[];
let dsketqua:number[]=[]
arr.map((s)=>{     
       if(!kq[s]){
       dsketqua.push(s)
        kq[s]=1
       }else{
        kq[s]+=1
       }
  })

  dsketqua.map((e)=>{console.log(e , " xuất hiện  " ,kq[e]," trong mảng " ) })

  
  
