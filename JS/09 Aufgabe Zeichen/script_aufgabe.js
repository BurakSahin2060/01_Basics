// Erstelle mit Hilfe einer Schleife und Modulo das folgende Ausgabe liefert (Rechteckbeispiel adaptieren):
// X X X X
// O O O O
// X X X X
// O O O O


let output = "";

for (let index = 1; index < 5; index++) {
  output += "x";
  if (index%4==0){
    console.log(output);
    output=""
  }
}

for (let index = 1; index < 5; index++) {
    output += "o";
    if (index%4==0){
      console.log(output);
      output=""
    }
  }


  for (let index = 1; index < 5; index++) {
    output += "x";
    if (index%4==0){
      console.log(output);
      output=""
    }
  }
  

  for (let index = 1; index < 5; index++) {
    output += "o";
    if (index%4==0){
      console.log(output);
      output=""
    }
  }

  
// Versuche in einer for - Schleife (1-100) alle geraden Zahlen zu addieren (zwei Lösungswege ⇒ Zähler
// dahingehend verändern das er nur gerade Zahlen zählt und mit Modulo arbeiten.)





/* Versuche mit einer for/while Schleife den Anfangsbuchstaben deines Namens auszugeben, z.B.: 
xxxxx
x    x
x    x
xxxxx
x    x
x    x
xxxxx                             */

let output2 = "";
console.log(output2);

for (let index = 1; index < 6; index++) {
    output2 += "x";
    if (index%5==0){
      console.log(output2);
      output2=""
    }
  }

  for (let index = 1; index < 2; index++) {
    output2 += "x    x";
    if (index%1==0){
      console.log(output2);
      output2=""
    }
  }

  for (let index = 1; index < 2; index++) {
    output2 += "x    x";
    if (index%1==0){
      console.log(output2);
      output2=""
    }
  }

  for (let index = 1; index < 6; index++) {
    output2 += "x";
    if (index%5==0){
      console.log(output2);
      output2=""
    }
  }

  for (let index = 1; index < 2; index++) {
    output2 += "x    x";
    if (index%1==0){
      console.log(output2);
      output2=""
    }
  }

  for (let index = 1; index < 2; index++) {
    output2 += "x    x";
    if (index%1==0){
      console.log(output2);
      output2=""
    }
  }

  for (let index = 1; index < 6; index++) {
    output2 += "x";
    if (index%5==0){
      console.log(output2);
      output2=""
    }
  }




 