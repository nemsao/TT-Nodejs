


function allsum(...agrs){
    var sum=0;
    agrs.map(s=>{sum+=s })
    return sum;
}

function showname(fisrtname,lastname,...title ){
   console.log(fisrtname+ " "+lastname )
   console.log(title[0]+title[1] )
   console.log(title.length)
}
//rest params
function spreadparameter(){
    // console.log(allsum(1))
    // console.log(allsum(1,2))
    // console.log(allsum(1,2,3))

    showname("nam","ha hai "," bat phong"," khong nhay dau  ")
}



function spreadsyntax(){
   var arr=[1,2,3,4]
   var arr2=[3,6,8,94,0]
   console.log(Math.max(332,...arr,...arr2));
   var str="hahaha";
   console.log([...str])


}


function templatestr(){
    var cat=300
    var  dog=2
    console.log(` 1 kem giá ${cat} 2 kem giá ${cat*2} `)
    let intro="Hello everyone I am ";
    let name=" Luis Sui ";
    let Lname=" Certain ";

    console.log(`${intro} ${name} ${Lname} `)
    console.log(`${cat+dog} ${cat*dog}  `)
}
let promise=new Promise((res,rej)=>{
    var index=Math.round(Math.random())
    if(index==1){
        res("Sussecc")
    }else{
        rej("Fail to ")
    }
       
})



function shorthandtechnich(){
    // joining arrays
var odd = [1, 3, 5];
var nums = [2 ,4 , 6].concat(odd);
// cloning arrays
const arr = [1, 2, 3, 4];
const arr2 = arr.slice()
//after apply short hand
// joining arrays
const odd2 = [1, 3, 5 ];
const nums2 = [2 ,4 , 6, ...odd];
console.log(nums2); // [ 2, 4, 6, 1, 3, 5 ]
// cloning arrays
const arrsrthand = [1, 2, 3, 4];
const arr2srthand = [...arr];
console.log(arr2srthand); 
//clone a array
 odd = [1, 3, 5 ];
 nums = [2, ...odd, 4 , 6];
// can destructing with spread operator
 const { a, b, ...z } = { a: 1, b: 2, c: 3, d: 4 };
console.log(a) // 1
console.log(b) // 2
console.log(z) // { c: 3, d: 4  }
}



// mandatory = () => {
//     throw new Error('Missing parameter!');
//   }
  
//   foo = (bar = mandatory()) => {
//     return bar;
//   }
  //console.log(foo())

  const pets = [
    { type: 'Dog', name: 'Max'},
    { type: 'Cat', name: 'Karl'},
    { type: 'Dog', name: 'Tommy'},
  ]
  pet = pets.find(pet => pet.type ==='Dog' && pet.name === 'Tommy');
console.log(pet); // { type: 'Dog', name: 'Tommy' }



 spreadparameter()
 spreadsyntax()
 templatestr()
shorthandtechnich()
promise.then((s)=>{console.log(s) }).catch((error)=>console.log(error))
