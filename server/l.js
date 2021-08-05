import fs from 'fs';
import readline from 'readline';
import chalk from 'chalk';

async function processLineByLine() {
  const fileStream = fs.createReadStream('./cs.txt');
  let a = [];
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  for await (const line of rl) {
    a.push(line);
  }
  return a;
}
export default async function csLog() {
  const newArr = await processLineByLine();
  for (let i = 1; i < newArr.length; i++) {
    setTimeout(function () {
      console.log(chalk.yellow(newArr[i]));
    }, i * 60);
  }
}
