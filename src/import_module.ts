import { add, minus, mul } from "./module";

console.log(add(1, 2));
console.log(minus(1, 2));
console.log(mul(3, 2));

import * as calculator from "./module";

console.log(calculator.add(1, 2));
console.log(calculator.minus(1, 2));
console.log(calculator.mul(3, 2));
