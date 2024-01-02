interface Point {
  x: number;
  y: number;
}

function Printcoop(pt: Point) {
  console.log(" The coordinate value is ", pt.x);
  console.log(" The coordinate value is ", pt.y);
}
Printcoop({ x: 32, y: 11 });
