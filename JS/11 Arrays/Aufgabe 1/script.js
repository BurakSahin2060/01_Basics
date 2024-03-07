// The program: 
// The nucleotides inside a DNA sequence can be represented by a string composed by A, C, G and T. ...
// ... A sample string representing a DNA sequence is "ATGCTTCAGAAAAGGTCAGCG".

// Your task is to count how many times the symbols A, C, G and T appear in the string s.

let symbols = "ATGCTTCAGAAAAGGTCAGCG";

let arr = symbols.split ("");

let count_a = 0;
let count_c = 0;
let count_g = 0;
let count_t = 0;

for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === "A") {
        count_a++;
    }
    else if (arr[i] === "C") {
        count_c++;
    }
    else if (arr[i] === "G") {
        count_g++;
    }
    else if (arr[i] === "T") {
        count_t++;
    }
}

console.log(count_a);
console.log(count_c);
console.log(count_g);
console.log(count_t);


// INPUT:
// A single line, composed of A, C, G and T.

// OUTPUT:
// The number of times A, C, G and T appear in the string s, separated by a space.

// CONSTRAINTS:
// 0 < len(s) < 1000

// EXAMPLE:
// Input:
// AACT
// Output:
// 2 1 0 1
