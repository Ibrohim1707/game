let mainNumber = document.querySelector(".secretnumber");

let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let result = document.querySelector(".result");
let skor = document.querySelector(".score");
let ant = Number(skor.value);

let number = Number(input.value);
let secretNumber = Math.trunc(Math.random() * 20 + 1);

console.log(secretNumber);

btn.addEventListener("click", () => {
  let number = Number(input.value);
  if (!number) {
    result.textContent = "⛔️ No number!";
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else if (secretNumber === number) {
    result.textContent = "🎉 Correct Number!";
    document.body.style.backgroundColor = "green";
    mainNumber.textContent = secretNumber;
  } else if (secretNumber !== number) {
    result.textContent =
      secretNumber < number ? "📈 Katta son!" : "📉 Kichik Son!";
    document.body.style.backgroundColor = "red";
    document.body.style.color = "white";
    mainNumber.textContent = "?";
  }
});

function res() {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
  result.textContent = "Start guessing";
  mainNumber.textContent = "?";
  input.value = "";
}
