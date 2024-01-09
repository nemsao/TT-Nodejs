export function add(a: number, b: number) {
  return a + b;
}
function minus(a: number, b: number) {
  return a - b;
}
function mul(a: number, b: number) {
  return a * b;
}
export default function div(a: number, b: number) {
  return a / b;
}
export { minus, mul };

export type User = {
  id: number;
  name: string;
};

console.log(add(1, 3));
