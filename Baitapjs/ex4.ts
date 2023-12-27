export default function fiterRange(arr:number[],a:number,b:number) : any {
    arr.map((s,i)=>{    
       if(s>=a && s<=b){arr.splice(i,1)} 
    })
    return (arr);
}