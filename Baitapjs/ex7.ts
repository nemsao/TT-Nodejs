const getMaxSubSum=(arr: number[]) =>{
  let maxvalue = 0;
  for (let i = 0; i < arr.length; i++) {
    maxvalue += arr[i];

    if (arr[i] < 0) {
      maxvalue = 0;
    }
  }
  return maxvalue;
}
console.log("bai 7   /output ::", getMaxSubSum([2, -4, -3, -1, 6, 5]));
