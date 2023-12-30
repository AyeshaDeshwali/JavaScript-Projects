const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber);
const guessField = document.getElementById("guessField");
const guessSubmit = document.getElementById("guessSubmit");
const message = document.querySelector(".message");
let attempts = 0;
guessSubmit.addEventListener("click", checkGuess);
function checkGuess() {
  const userGuess = parseInt(guessField.value);
  attempts++;
  if (userGuess === randomNumber) {
    message.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
    message.style.color = "green";
    guessField.disabled = true;
    guessSubmit.disabled = true;
  } else if (userGuess < randomNumber) {
    message.textContent = "Try a higher number.";
    message.style.color = "red";
  } else {
    message.textContent = "Try a lower number.";
    message.style.color = "red";
  }
}
