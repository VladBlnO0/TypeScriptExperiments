import * as fs from "node:fs/promises";

let a = 5;
let b = 7;
let m = 4096;
let y = 4003;
const n = 8;

function rnd_init(): void {
  y = 4003;
}

function rnd(): number[] {
  const t: number[] = [];
  for (let i = 0; i < n; i++) {
    y = (a * y + b) % m;
    t.push(y % 256);
  }
  return t;
}

function mod256(x: number): number {
  return ((x % 256) + 256) % 256;
}

async function en_de_crypt(
  finPath: string,
  foutPath: string,
  mode: "enc" | "dec",
) {
  rnd_init();
  const fin = await fs.open(finPath, "r");
  const fout = await fs.open(foutPath, "w");
  try {
    const buf = Buffer.alloc(n);
    while (true) {
      const { bytesRead } = await fin.read(buf, 0, n, null);
      if (!bytesRead) break;
      const chunk = buf.slice(0, bytesRead);
      const gammaFull = rnd();
      const gamma = gammaFull.slice(0, bytesRead);
      const out = Buffer.alloc(bytesRead);
      for (let i = 0; i < bytesRead; i++) {
        if (mode === "enc") {
          out[i] = mod256(chunk[i]! + gamma[i]!);
        } else {
          out[i] = mod256(chunk[i]! - gamma[i]!);
        }
      }
      await fout.write(out);
    }
  } finally {
    await fin.close();
    await fout.close();
  }
}

(async () => {
  await en_de_crypt("Source.txt", "Coded.txt", "enc");
  await en_de_crypt("Coded.txt", "DeCoded.txt", "dec");
  console.log("Encryption and decryption complete");
})();
