#!/usr/bin/env node

import * as fs from "fs";
import * as path from "path";
import * as process from "process";

function format(number: number): string {
  return String(number).padStart(4, "0");
}

const dirPath = process.cwd();

let js = 0,
  ts = 0,
  php = 0;
  
try {
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const extension = path.extname(file);
    if (extension === ".js") {
      js++;
    }
    if (extension === ".ts") {
      ts++;
    }
    if (extension === ".php") {
      php++;
    }
  }
  console.log(`
    *.js: ${format(js)}
    *.ts: ${format(ts)}
    *.php: ${format(php)}
  `);
} catch (err) {
  console.error(`Error reading directory: ${err}`);
}
