const getData = <T>(data: T[]) => {
  return data;
};

getData<number>([1, 2, 3, 4]);
getData<string>(["nam", "dat", "hai"]);

interface person {
  name: string;
  age: number;
}
interface car {
  name: string;
  price: number;
  color: string;
}
interface List<T> {
  length: number;
  [index: number]: T;
}

const PersonList: List<person> = [
  { name: "hai", age: 12 },
  { name: "hai", age: 12 },
  { name: "hai", age: 12 },
];
const CarList: List<car> = [
  { name: "hai", price: 12, color: "red" },
  { name: "hai", price: 12, color: "yellow" },
  { name: "hai", price: 12, color: "red" },
];
