function fiterRange(arr:number[],a:number,b:number) : any {
     arr.map((s,i)=>{    
        if(s>=a && s<=b){arr.splice(i,1)} 
     })
     return (arr);
}
function Sortedcopy(arr:number[]) : any {
     var copyarr:number[]=[];
     copyarr=arr.slice();
     copyarr.sort();
    return (copyarr);
}
function getMaxSubSum(arr:number[] ){
     var currenvalue=0;
     var maxvalue=0;
     for(var i =0; i<arr.length ;i++){
        maxvalue+=arr[i];
        
          if(arr[i]<0){
             maxvalue=0;
          }
     }
  return maxvalue;
}
function camelize(str:string ){
    var x= str.split('-').map((s,i)=>{ s=s.charAt(0).toUpperCase()+s.slice(1) ;return s;  }).join('');
    
        return x;
}
class user{
        name=""
        age=0
    }
function sortByAge(users: user[] ){
   return (users.sort((a,b)=>{return a.age-b.age}))

   
}
function AgeByAverage(users: user[] ){
    
    var sum=users.reduce((total,user)=>{return  total+=user.age  },0)
    return sum/users.length

 
    
 }
function  ThisIsMain(): void {
    
     var styles:string[]=["jazz","blue"];
     styles.push("Rock'n roll")
     console.log("bai 2.1",styles);
     styles[ Math.round(styles.length / 2)-1 ]="Classic";
     console.log("bai 2.2 /output ::",styles);
     console.log("bai 2.3 /output ::",styles.shift());styles.unshift("Rap","Reggae" )  ;
     console.log("bai 2.4 /output ::", styles);
     console.log("bai 4   /output ::", fiterRange([1,2,3,4,5,6],2,5));
     console.log("bai 6   /output ::", Sortedcopy([2,4,3,1,6,5]));
     console.log("bai 7   /output ::", getMaxSubSum([2,-4,-3,-1,6,5]));
     console.log("bai 8   /output ::", camelize("haha-haha"));
     console.log("bai 9   /output ::", sortByAge([{name:"nam",age:11},{name:"hai",age:1},{name:"cuong",age:33}]));
     console.log("bai 11  /output ::",AgeByAverage([{name:"nam",age:11},{name:"hai",age:1},{name:"cuong",age:33}]));
}
ThisIsMain()


