const arr: number[] = [1, 2, 8, 4, 1, 3, 1, 8, 3];

const arr_num: Record<number, number> = {};

for (const num of arr) {
  if (arr_num[num]) {
    arr_num[num]++;
  } else {
    arr_num[num] = 1;
  }
}

const kq: Record<number, number>[] = [];

for (const num in arr_num) {
  kq.push({ [num]: arr_num[num] });
}

console.log(kq);
