function buttonAddition() {
  let add1 = document.getElementById("add1").value;
  let add2 = document.getElementById("add2").value;

  let resultAddition = parseFloat(add1) + parseFloat(add2);

  console.log(resultAddition);
  document.querySelector(".result").innerHTML = resultAddition;
}

function buttonSubtraction() {
  let subtract1 = document.getElementById("subtract1").value;
  let subtract2 = document.getElementById("subtract2").value;

  let resultSubtraction = parseFloat(subtract1) - parseFloat(subtract2);

  console.log(resultSubtraction);
  document.querySelector(".result").innerHTML = resultSubtraction;
}

function buttonMultiplication() {
  let multiple1 = document.getElementById("multiple1").value;
  let multiple2 = document.getElementById("multiple2").value;

  let resultMultiplication = parseFloat(multiple1) * parseFloat(multiple2);

  console.log(resultMultiplication);
  document.querySelector(".result").innerHTML = resultMultiplication;
}

function buttonDivision() {
  let divison1 = document.getElementById("divison1").value;
  let divison2 = document.getElementById("divison2").value;

  let resultDivision = parseFloat(divison1) / parseFloat(divison2);

  console.log(resultDivision);
  document.querySelector(".result").innerHTML = resultDivision;
}
