import bai2 from './ex2'
import fiterRange from './ex4'
import Sortedcopy  from './ex6'
import getMaxSubSum  from './ex7'
import camelize  from './ex8'
import { user ,sortByAge,AgeByAverage}  from './ex9'




function  ThisIsMain(): void {
     
     
     bai2()

     console.log("bai 4   /output ::", fiterRange([1,2,3,4,5,6],2,5));
     console.log("bai 6   /output ::", Sortedcopy([2,4,3,1,6,5]));
     console.log("bai 7   /output ::", getMaxSubSum([2,-4,-3,-1,6,5]));
     console.log("bai 8   /output ::", camelize("haha-haha"));
     

     console.log("bai 9   /output ::", sortByAge([{name:"nam",age:11},{name:"hai",age:1},{name:"cuong",age:33}]));
     console.log("bai 11  /output ::",AgeByAverage([{name:"nam",age:11},{name:"hai",age:1},{name:"cuong",age:33}]));
     
}
ThisIsMain()


