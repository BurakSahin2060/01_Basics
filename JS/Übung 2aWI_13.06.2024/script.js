// Multipliziere jede 3te Zahl und dividiere durch die Anzahl der geraden Zahlen
// (5 * 4 * 3) / 3

const data1 = "5,2,3,4,1,2,3,5";

const numbers = data1.split(",").map(Number);

let geradeZahlen = 0;
let endproduct = 1;

for (let index = 0; index < numbers.length; index++) {
  if ((index + 1) % 3 === 0) {
    endproduct *= numbers[index];
  }

  if (numbers[index] % 2 === 0) {
    geradeZahlen++;
  }
}

const result = endproduct / geradeZahlen;

console.log(result);

// Berechne die Summe der geraden durch die Summe der ungeraden Zalen

const data2 = "1,2,3,4,5,6,7,8,9,10,11,12";

const numbers2 = data2.split(",");

let sumGrd = 0;
let sumUngrd = 0;

for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] % 2 === 0) {
    sumGrd += numbers[index];
  } else {
    sumUngrd += numbers[index];
  }
}

const result2 = sumGrd / sumUngrd;

console.log(result);

// Gib nur die Wörter aus, die ein e enthalten

const data3 = "Hans ist ein netter Kerl!";

let arr3 = data3.split(" ");

console.log(arr3);

if (condition) {
}
