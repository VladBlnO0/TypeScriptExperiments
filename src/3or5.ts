function solution(number: number): number {
  let count = 0;
  for (let index = 0; index < number; index++) {
    if (index % 3 === 0 || index % 5 === 0) count += index;
  }
  return count;
}

console.log(solution(10));
