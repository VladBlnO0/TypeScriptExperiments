function print(i: number, arr: number[]): void {
  if (i === 5) {
    return;
  } else {
    console.log(arr[i]);
    return print(i + 1, arr);
  }
}

const arr: number[] = new Array(5);
for (let i: number = 0; i < 5; i++) {
  arr[i] = Math.floor(Math.random() * 20) + 1;
}
print(0, arr);
