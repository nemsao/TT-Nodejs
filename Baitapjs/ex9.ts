 class user{
    name=""
    age=0
    public constructor( name:string="không tên " , age:number = 0){
        this.name=name
        this.age=age
    }

   
}

function sortByAge(users: user[] ){
    return (users.sort((a,b)=>{return a.age-b.age}))
}
 
export default function AgeByAverage(users: user[] ){
    
    var sum=users.reduce((total,user)=>{return  total+=user.age  },0)
    return sum/users.length

 
    
 }
export  {user,sortByAge,AgeByAverage}
