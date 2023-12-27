export default function Sortedcopy(arr:number[]) : any {
    var copyarr:number[]=[];
    copyarr=arr.slice();
    copyarr.sort();
   return (copyarr);
}
console.log("bai 6   /output ::", Sortedcopy([2,4,3,1,6,5]));