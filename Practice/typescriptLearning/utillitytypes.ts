
interface person{name:string;age:number}

function updateperson(prson:person,fieldupdate :Partial<person> ){
      return {...prson,...fieldupdate}

}
const person3={
    name:"truong",
    age:12
}
const personupdate={
    age:13
}
console.log('HELLO',updateperson(person3,personupdate))