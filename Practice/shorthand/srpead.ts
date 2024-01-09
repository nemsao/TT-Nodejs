const allsum = (...agrs: number[]) => {
  var sum = 0;
  agrs.map((s) => {
    sum += s;
  });
  return sum;
};

const showname = (
  fisrtname: string,
  lastname: string,
  ...title: string[]
): any => {
  console.log(fisrtname + " " + lastname);
  console.log(title[0] + title[1]);
  console.log(title.length);
};

//rest params
const spreadparameter = (): any => {
  console.log(allsum(1));
  console.log(allsum(1, 2));
  console.log(allsum(1, 2, 3));

  showname("nam", "ha hai ", " bat phong", " khong nhay dau  ");
};

const spreadsyntax = () => {
  var arr = [1, 2, 3, 4];
  var arr2 = [3, 6, 8, 94, 0];
  console.log(Math.max(332, ...arr, ...arr2));
  var str = "hahaha";
  console.log([...str]);
};

spreadparameter();
spreadsyntax();
