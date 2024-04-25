const numbers = [8, 2, 1, 4, 6, 1, 8, 7];
// Zähle alle Zahlen die zwischen 4 (inklusive und 8 exklusive) liegen
// Output: 3

// let nums = numbers.split(",");

let minNumber = 0;

for (let i = 0; i < numbers.length; i++) {
  if (numbers < 8 && numbers >= 4) {
    minNumber + numbers;
  }
}

console.log(minNumber);
