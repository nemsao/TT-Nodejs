let options: number | string;
options = 1;
options = "1";

function log(a: number | string) {
  console.log(a);
}
log(1);
log("string");
