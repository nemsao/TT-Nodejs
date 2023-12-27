export default function fiterRange(arr:number[],a:number,b:number) : any {
    arr.map((s,i)=>{    
       if(s>=a && s<=b){arr.splice(i,1)} 
    })
    return (arr);
}
console.log("bai 4   /output ::", fiterRange([1,2,3,4,5,6],2,5));
    