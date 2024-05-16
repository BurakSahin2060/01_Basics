function generate() {
  let number1 = document.getElementById("field1").value;
  let number2 = document.getElementById("field2").value;

  let amountOfRandomNumbers = parseInt(number2) - parseInt(number1);
  console.log("Zufallszahl zwischen " + number1 + " und " + number2);

  let randomNumber = Math.floor(
    Math.random() * amountOfRandomNumbers + parseInt(number1)
  );
  document.getElementById("randomNumber").innerHTML = randomNumber;
}
