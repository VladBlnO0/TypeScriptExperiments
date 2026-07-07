function solution(str: string, ending: string): boolean {
  if (ending === "") return true;
  return str.endsWith(ending);
}

console.log(solution("abc", "bc") ? "true" : "false");
