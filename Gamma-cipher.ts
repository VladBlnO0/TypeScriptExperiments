import * as file from "node:fs/promises";

let a = 5;
let b = 7;
let m = 4096;
let y = 4003;
let n = 8;

function rnd_init() {
  y = 4003;
}

function rnd() {
  let t = [];
  for (let i = 0; i < n; i++) {
    y = (a * y + b) % m;
    t.push(y % 256);
  }
  return t;
}

// === ENCODING/DECODING ===
function en_de_crypt(fin: string, fout: string, mode: "enc" | "dec") {
  rnd_init();
  file.readFile(fin, { encoding: null }).then((data) => {
    let gamma = rnd();
    let arr = [];
    for (let i = 0; i < data.length; i++) {
      if (mode === "enc") {
        arr.push((data[i] + gamma[i]) % 256);
      } else if (mode === "dec") {
        arr.push((data[i] - gamma[i]) % 256);
      }
    }
    return file.writeFile(fout, Buffer.from(arr));
  });
}

en_de_crypt("Source.txt", "Coded.txt", "enc");
en_de_crypt("Coded.txt", "DeCoded.txt", "dec");

console.log("Encryption and decryption complete");
