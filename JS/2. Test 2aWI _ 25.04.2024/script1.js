const data = "Hans geht heute schwimmen! das ist gut";
// Gib jedes 3te Wort aus
// Output
// Hans schwimmen gut

const array = data.split(" ");
let output = "";

for (let index = 0; index < array.length; index++) {
  if (index % 3 == 0) {
    output += array[index];
    output += " ";
  }
}

console.log(output);
