function add(x: number, y: number): number {
  return x + y;
}

const myfucnAdd = function (x: number, y: number) {
  return x + y;
};

//Optional Parameter

function add2(x: number, y: number, c?: number): number {
  if (c) {
    return x + y + c;
  }
  return x + y;
}
console.log(add2(1, 2));
console.log(add2(1, 2, 3));

//default parameter
function add3(x: number, y: number, c: number = 2): number {
  return x + y + c;
}
