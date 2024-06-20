// Multipliziere jede 3te Zahl und dividiere durch die Anzahl der geraden Zahlen
// (5 * 4 * 3) / 3
const data1 = "5,2,3,4,1,2,3,5";

const number1 = data1.split(",");

let result1 = 1;
let straightNumbers = 0;

for (let i = 0; i < number1.length; i += 3) {
  result1 *= parseInt(number1[i]);
  if (parseInt(number1[i]) % 2 == 0) {
    straightNumbers += 1;
  }
}

console.log(result1 / straightNumbers);

// Berechne die Summe der geraden durch die Summe der ungeraden Zalen
const data2 = "1,2,3,4,5,6,7,8,9,10,11,12";

const numbers2 = data2.split(",");
let geraden = 0;
let ungeraden = 0;

for (let index = 0; index < numbers2.length; index++) {
  if (parseInt(numbers2[index]) % 2 == 0) {
    geraden += parseInt(numbers2[index]);
  } else {
    ungeraden += parseInt(numbers2[index]);
  }
}

console.log("Summe der geraden Zahlen: " + geraden);
console.log("Summe der ungeraden Zahlen: " + ungeraden);

// Gib nur die Wörter aus, die ein e enthalten
const data3 = "Hans ist ein netter Kerl!";

const words = data3.split(" ");
let result3 = " ";

for (let i = 0; i < words.length; i++) {
  if (words[i].includes("e")) {
    result3 += words[i];
    result3 += " ";
  }
}

console.log("Wörter die ein e enthalten: " + result3);
