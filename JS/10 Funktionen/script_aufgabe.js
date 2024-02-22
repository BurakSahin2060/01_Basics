let J = 2024;

let N = J - 1900;
let A = N % 19;
let B = Math.floor((7 * A + 1) / 19);
let M = (11 * A + 4 - B) % 29;
let Q = Math.floor(N / 4);
let W = (N + Q + 31 - M) % 7;
let P = 25 - M - W;

console.log("Ostersonntag ist der " + P + ". April oder der " + (P + 31) + ". März");
