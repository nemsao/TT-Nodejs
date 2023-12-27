export default function checkperfnumber(num:number){
   let sum:number=0;
   for(let i=1;i<=num;i++){
           sum+=(num%i==0)?i:0
   }

   if(sum===num*2)    { return "Là số hoàn hảo"}else{return "không phải số hoàn hảo" }
   
}