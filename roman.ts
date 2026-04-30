function solution(roman: string): number {
  let res = 0;

  const mp: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1_000,
  };

  for (let i = 0; i < roman.length; i++) {
    const current: string = roman[i]!;
    const next: string | undefined = roman[i + 1];

    const curVal = mp[current];
    const nextVal = next ? mp[next] : undefined;

    if (curVal === undefined) continue;
    if (nextVal === undefined) continue;

    if (nextVal > curVal) {
      res -= curVal;
    } else {
      res += curVal;
    }
  }

  return Math.abs(res);
}

console.log(solution("MCMXCIV"));
