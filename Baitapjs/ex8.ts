export default function camelize(str: string) {
  const x = str.replace(/-([a-z])/g, function (ma, letter) {
    return letter.toUpperCase();
  });
  return x;
}
console.log("bai 8   /output ::", camelize("haha-haha"));
