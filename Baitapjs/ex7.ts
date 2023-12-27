
export default function getMaxSubSum(arr:number[] ){
    
    var maxvalue=0;
    for(var i =0; i<arr.length ;i++){
       maxvalue+=arr[i];
       
         if(arr[i]<0){
            maxvalue=0;
         }
    }
 return maxvalue;
}
console.log("bai 7   /output ::", getMaxSubSum([2,-4,-3,-1,6,5]));