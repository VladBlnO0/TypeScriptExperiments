function solution(roman) {
  let res = 0;

  const mp = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1_000,
  };
  for (let i = 0; i < roman.length; i++) {
    if (roman[i] in mp) {
      if (mp[roman[i + 1]] > mp[roman[i]]) {
        res -= mp[roman[i]];
      } else {
        res += mp[roman[i]];
      }
    }
  }

  return Math.abs(res);
}

console.log(solution("MCMXCIV"));
