function zero(callback?: (n: number) => number) {
  return callback ? callback(0) : 0;
}
function one(callback?: (n: number) => number) {
  return callback ? callback(1) : 1;
}
function two(callback?: (n: number) => number) {
  return callback ? callback(2) : 2;
}
function three(callback?: (n: number) => number) {
  return callback ? callback(3) : 3;
}
function four(callback?: (n: number) => number) {
  return callback ? callback(4) : 4;
}
function five(callback?: (n: number) => number): number {
  return callback ? callback(5) : 5;
}
function six(callback?: (n: number) => number) {
  return callback ? callback(6) : 6;
}
function seven(callback?: (n: number) => number) {
  return callback ? callback(7) : 7;
}
function eight(callback?: (n: number) => number) {
  return callback ? callback(8) : 8;
}
function nine(callback?: (n: number) => number) {
  return callback ? callback(9) : 9;
}
function plus(right: number) {
  return function (left: number) {
    return left + right;
  };
}
function minus(right: number) {
  return function (left: number) {
    return left - right;
  };
}
function times(right: number) {
  return function (left: number) {
    return left * right;
  };
}
function dividedBy(right: number) {
  return function (left: number) {
    return Math.trunc(left / right);
  };
}

console.log(seven(times(five())));
