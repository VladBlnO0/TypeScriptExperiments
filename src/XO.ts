function XO(str: string): boolean {
  return (str.match(/[x]/gi) || []).length === (str.match(/[o]/gi) || []).length
    ? true
    : false;
}

console.log(XO("ooxx"));
