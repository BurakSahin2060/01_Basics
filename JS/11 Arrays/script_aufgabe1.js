// Erstelle ein Array mit folgenden Werten: 4,1,2,3
let arr = [4,1,2,3];

// Füge die Werte 17 und 199 dazu
arr.push(17);
arr.push(199); 

//     a. Gib alle Werte in einer Schleife aus!
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}

//     b. Zähle alle Werte zusammen und gib das Ergebnis aus
let sum = 0;
for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
}
console.log("Die Summe aller Werte ist: " + sum);

//     c. Berechne den Mittelwert der Zahlen und gib das Ergebnis aus
let average = sum / arr.length;
console.log("Der Mittelwert der Zahlen ist: " + average);
