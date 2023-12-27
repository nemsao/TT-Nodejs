export default function camelize(str:string ){
    var x= str.split('-').map((s,i)=>{ s=s.charAt(0).toUpperCase()+s.slice(1) ;return s;  }).join('');
    
        return x;
}
console.log("bai 8   /output ::", camelize("haha-haha"));