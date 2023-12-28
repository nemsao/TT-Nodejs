const arr: number[] = [1, 2, 3, 4, 1, 1, 2, 3, 4, 5];
const dsketqua: { [key: number]: number }[] = [];
arr.map((s) => {
  if (!dsketqua[s]) {
    dsketqua.push({ [s]: 1 });
  } else {
     Object.values(dsketqua[s])++;
  }
});

console.log(dsketqua);
