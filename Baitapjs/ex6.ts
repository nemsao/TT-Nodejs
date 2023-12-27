export default function Sortedcopy(arr:number[]) : any {
    var copyarr:number[]=[];
    copyarr=arr.slice();
    copyarr.sort();
   return (copyarr);
}