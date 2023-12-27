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

const mandatory = () => {
    throw new Error('Missing parameter!');
  }
  
  let foo = (bar = mandatory()) => {
    return bar;
  }
  console.log(foo())

  const pets:any[] = [
    { type: 'Dog', name: 'Max'},
    { type: 'Cat', name: 'Karl'},
    { type: 'Dog', name: 'Tommy'},
  ]
 const pet = pets.find(pet => pet.type ==='Dog' && pet.name === 'Tommy');
console.log(pet); // { type: 'Dog', name: 'Tommy' }


shorthandtechnich()

