const temperaturesWeek1 = [-1, 5, 1, -10, -11, 2, 30, -8, -14];
const temperaturesWeek2 = [-1, 5, 3, -10, -11, 2, 30, -8, -44];
// Berechne den Mittelwert der Temperaturen der beiden Wochen
// Gib aus:
// Mittelwert Woche 1 : xxx
// MIttwlwert Woche 2 : xxx
// "Woche 1 war wärmer" oder "Woche 2 war wärmer" oder "Beide Wochen waren gleich warm"

// let temp_week1 = temperaturesWeek1.split(",");
// let temp_week2 = temperaturesWeek2.split(",");

let sum = 0;
for (let index = 0; index < temperaturesWeek1.length; index++) {
  sum += temperaturesWeek1[index];
}

let average1 = sum / temperaturesWeek1.length;
console.log("Mittelwert Woche 1: " + average1);

let sum2 = 0;
for (let index2 = 0; index2 < temperaturesWeek2.length; index2++) {
  sum2 += temperaturesWeek2[index2];
}

let average2 = sum2 / temperaturesWeek2.length;
console.log("Mittelwert Woche 2: " + average2);

if (temperaturesWeek1 < temperaturesWeek2) {
  console.log("Woche 1 war wärmer");
} else if (temperaturesWeek2 < temperaturesWeek1) {
  console.log("Woche 2 war wärmer");
} else if ((temperaturesWeek1 = temperaturesWeek2)) {
  console.log("Beide Wochen waren gleich warm");
}
