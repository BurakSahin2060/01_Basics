// Multipliziere alle ungeraden Zahlen miteinander
// und dividiere durch die Anzahl der geraden Zahlen
// (2*4*2...)/6
const data1 = "5,2,3,4,1,2,3,5,10,-11";
const numbers1 = data1.split(",");

let result1 = 1;
let ungeraden = 0;
let geraden = 0;

for (let i = 0; i < numbers1.length; i++) {
  if (parseInt(numbers1[i]) % 2 != 0) {
    result1 *= parseInt(numbers1[i]);
  } else if (parseInt(numbers1[i]) % 2 == 0) {
    geraden += 1;
  }
}

console.log(result1 / geraden);

// Zähle die negativen Zahlen, die positiven Zahlen und die Anzahl von 0
const data2 = "1,2,3,4,0,-2,0,-1,5,6,7,8,9,10,11,12";
const numbers2 = data2.split(",");

let zero = 0;
let negativ = 0;
let positiv = 0;

for (let i = 0; i < numbers2.length; i++) {
  const number = parseInt(numbers2[i]);

  if (number < 0) {
    negativ += 1;
  } else if (number > 0) {
    positiv += 1;
  } else if (number === 0) {
    zero += 1;
  }
}

console.log("Anzahl der negativen Zahlen: " + negativ);
console.log("Anzahl der positiven Zahlen: " + positiv);
console.log("Anzahl der nullen: " + zero);

// gib nur die Wörter aus, die ein e aber kein l enthalten
// ein netter
const data3 = "Hans ist ein netter Kerl!";
const word3 = data3.split(" ");
let result = "";

for (let i = 0; i < word3.length; i++) {
  if (word3[i].includes("e") && !word3[i].includes("l")) {
    result += word3[i] + " ";
  }
}

console.log(result);
