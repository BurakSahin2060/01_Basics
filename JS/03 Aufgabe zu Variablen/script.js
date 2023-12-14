let banana = "Banane";
let apple = "Apfel";

let bananaPricePerKilo = 2.14;
let applePricePerKilo = 3.43;

let appleWeight = 0.34;
let bananaWeight = 0.22;

console.log("Anzahl Bananen pro Kilo: " + (1 / bananaWeight));
console.log("Anzahl Äpfel pro Kilo: " + (1 / appleWeight));
console.log("Preis pro Banane: " + bananaPricePerKilo);
console.log("Preis pro Apfel: " + applePricePerKilo);

let numberOfApples = 8;
let totalPriceApple = numberOfApples * applePricePerKilo * appleWeight;
console.log("Preis von 8 Äpfeln: " + totalPriceApple);

let numberOfBananas = 17;
let totalPriceBanana = numberOfBananas * bananaPricePerKilo * bananaWeight;
console.log("Preis von 17 Bananen: " + totalPriceBanana);

let weightOfApplesInTons = 1000;
let totalPriceAppleInTons = weightOfApplesInTons * applePricePerKilo;
console.log("Preis von 1 Tonne Äpfel: " + totalPriceAppleInTons);

let weightOfBananasInTons = 1000;
let totalPriceBananasInTons = weightOfBananasInTons * bananaPricePerKilo;
console.log("Preis von 1 Tonne Bananen: " + totalPriceBananasInTons);
