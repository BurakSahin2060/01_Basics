// Erstelle ein Programm, das einen Bankomaten simuliert. Folgende Möglichkeiten gibt es:
// 1. Einzahlen
// 2. Abheben
// 3. Kontostand
// 4. Beenden

import { resolve } from "path";
import { createInterface } from "readline";
const readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});
const readLineAsync = () => {
  return new Promise((resolve) => {
    readline.question("", (userRes) => {
      resolve(userRes);
    });
  });
};

/// here comes your code
console.log("Selektieren Sie die gewünschte Funktion:");
console.log("1. Einzahlen");
console.log("2. Abheben");
console.log("3. Kontostand");
console.log("4. Beenden");
console.log();

let inputOfUser = await readLineAsync();
console.log(inputOfUser);
let kontostand = 0;

if ((inputOfUser = "1.")) {
  console.log("Geben Sie den Betrag ein den Sie einzahlen möchten");
  let inputOfUser = await readLineAsync();
  console.log("Sie haben " + inputOfUser + " eingezahlt");
  let inputOfUser = await readLineAsync();
} else if ((inputOfUser = "2.")) {
  console.log("Geben Sie den Betrag ein den Sie abheben möchten");
  let inputOfUser = await readLineAsync();
  console.log("Sie haben " + inputOfUser + " abgehoben");
  let inputOfUser = await readLineAsync();
} else if ((inputOfUser = "3.")) {
  console.log("Der Kontostand beträgt: " + kontostand);
} else if ((inputOfUser = "4.")) {
  console.log("Machine ist stopped");
}

readline.close();
