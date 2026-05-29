#!/usr/bin/env node

const P = 2,
  Q = 11,
  e = 7,
  d = 3;
const alphabet = "1234567890";
const N = P * Q;

function enDeCrypt(text: string | string[], exp: number) {
  const edList = [];
  for (let i = 0; i < text.length; i++) {
    edList.push(String(Number(text[i]) ** exp % N));
  }
  return edList;
}

function checkTxt(orgTxt: string, decTxt: string) {
  if (orgTxt === decTxt) {
    console.log("Good Code\n");
  } else {
    console.log("Bad Code\n");
  }
}

console.log(alphabet);
console.log(enDeCrypt(alphabet, e).join(" "));
const res = enDeCrypt(enDeCrypt(alphabet, e), d).join("");
console.log(res + "\n");

checkTxt(alphabet, res);

const newAlphabet = "2025";

console.log(newAlphabet);
console.log(enDeCrypt(newAlphabet, e).join(" "));
const res2 = enDeCrypt(enDeCrypt(newAlphabet, e), d).join("");
console.log(res2);

checkTxt(newAlphabet, res2);
