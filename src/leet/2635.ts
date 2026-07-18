function map(arr: number[], fn: (n: number, i: number) => number): number[] {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]!;
    arr[i] = fn(element, i);
  }
  return arr;
}

console.log(map([1, 2, 3], (n) => n * 2));
