const Person: { name: string; age: number; gender: string } = {
  name: "Nam",
  age: 12,
  gender: "male",
};
const Person2: { name: string; age: number; gender?: string } = {
  name: "Nam",
  age: 12,
};
const Person3: { readonly name: string; age: number; gender: string } = {
  name: "Hai",
  age: 22,
  gender: "female",
};
//  Person3.name="Long"  Error
