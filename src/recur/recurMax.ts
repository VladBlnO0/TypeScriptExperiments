function FindMax(n: number, count: number, max: number, arr: number[]): number {
  if (count === n) {
    console.log(max);
    return 0;
  } else {
    if (arr[count]! >= max) {
      max = arr[count]!;
    }
    return FindMax(n, count + 1, max, arr);
  }
}

const arr: number[] = new Array(6);
let value = Math.floor(Math.random() * 9999) + 1;
console.log(value);

let n = 0;
while (value > 0) {
  arr[n] = value % 10;
  value = value / 10;
  value = Math.floor(value);
  n++;
}
const max_value = 0;

FindMax(n, 0, max_value, arr);
