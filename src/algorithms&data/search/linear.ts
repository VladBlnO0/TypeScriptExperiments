function linearSearch(array: number[], target: number): number {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
}

const numbers = [10, 45, 2, 33, 8, 12];
console.log(linearSearch(numbers, 33));
