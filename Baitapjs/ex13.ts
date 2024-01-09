const checkperfnumber = (num: number): string => {
  let sum: number = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i == 0) sum += i;
  }
  if (sum === num) {
    return "Là số hoàn hảo";
  } else {
    return "không phải số hoàn hảo";
  }
};
const input = 6;
console.log(`bai 13  /output :: số  ${input}  `, checkperfnumber(input));
