export default function checkperfnumber(num: number) {
  let sum: number = 0;
  const arr: number[] = [];
  for (let i = 1; i <= num / 2; i++) {
    if (num % i == 0) arr.push(i);
  }
  sum = arr.reduce((s, i) => {
    return (s = s + i);
  }, 0);

  if (sum === num) {
    return "Là số hoàn hảo";
  } else {
    return "không phải số hoàn hảo";
  }
}
console.log("bai 13  /output ::", checkperfnumber(28));
