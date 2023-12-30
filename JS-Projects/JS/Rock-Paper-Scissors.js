const choices = document.querySelectorAll(".choice");
const result = document.getElementById("result");

choices.forEach((choice) => {
  choice.addEventListener("click", playGame);
});

function playGame(e) {
  const userChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(userChoice, computerChoice);
  displayResult(winner, computerChoice);
}

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
}

function getWinner(user, computer) {
  if (user === computer) {
    return "It's a tie!";
  } else if (
    (user === "rock" && computer === "scissors") ||
    (user === "scissors" && computer === "paper") ||
    (user === "paper" && computer === "rock")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

function displayResult(winner, computerChoice) {
  result.innerHTML = `Computer chose ${computerChoice}. ${winner}`;
}
