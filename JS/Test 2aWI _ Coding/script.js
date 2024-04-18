const data = "Hans geht heute schwimmen";
// Drehe die Wörter um
// Output: schwimmen geht heute Hans
const array = data.split(" ");
let output = "";

for (let index = array.length - 1; index >= 0; index--) {
  output += array[index];
  output += " ";
}

console.log(output);

// finde die kleinste Zahl und gib an wie oft sie vorkommt
// Output: 1 2
const numbers = "8,2,1,4,6,1,1,1,8,7";

let nums = numbers.split(",");
let minNumber = parseInt(nums[0]);

for (let i = 0; i < nums.length; i++) {
  const number = parseInt(nums[i]);
  if (number < minNumber) {
    minNumber = number;
  }
}

let count = 0;
for (let i = 0; i < nums.length; i++) {
  const number = parseInt(nums[i]);
  if (number === minNumber) {
    count++;
  }
}

console.log(minNumber, count);

// Berechne den Mittelwert der Temperaturen
// Werte die größer gleich 50 und kleiner gleich -30 sind, sind
// Ausreißer und dürfen nicht berücksichtigt werden
const temperatures = "-1,5,51,-10,-11,2,90,-8,-44";

let figure = temperatures.split(",").map((temp) => parseInt(temp));

let sum = 0;
let count1 = 0;

for (let i = 0; i < figure.length; i++) {
  const temp = figure[i];

  if (temp >= -30 && temp <= 50) {
    sum += temp;
    count1++;
  }
}

let mean = 0;
if (count1 > 0) {
  mean = sum / count1;
}

console.log("Mittelwert der Temperaturen (ohne Ausreißer):", mean);
