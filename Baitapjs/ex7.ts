
export default function getMaxSubSum(arr:number[] ){
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