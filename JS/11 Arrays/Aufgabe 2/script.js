// The program:
// Invertiere eine Bitfolge

let bitfolge = "000111000"

let arr = bitfolge.split("");
let invert = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "0") {
        arr[i] = "1";
    } 
    else if (arr[i] === "1") {
        arr[i] = "0";
    }
}

let inverted = arr.join("");
console.log(inverted);

// EXAMPLE:
// Input
// 000111000
// Output
// 111000111

