let userScore = 0;
let compScore = 0;
let choice = document.querySelectorAll(".choice");
let userScorepera = document.querySelector("#user-score");
let compScorepera = document.querySelector("#comp-score");
let msg = document.querySelector("#msg");

function genComChoice() {
  let option = ["rock", "paper", "scissor"];
  let random = Math.floor(Math.random() * 3);
  return option[random];
}
function showWinner(userWin, compChoice, userChoice) {
  if (userWin) {
    userScore++;
    userScorepera.innerHTML = userScore;
    msg.innerHTML = `you win ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorepera.innerHTML = compScore;
    msg.innerHTML = `you lose beats ${compChoice} ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
}
function drawgame() {
  msg.innerHTML = "game was drwo";
  msg.style.backgroundColor = "black";
}
function playGame(userChoice) {
  let compChoice = genComChoice();
  if (userChoice === compChoice) {
    drawgame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
}
choice.forEach((choice) => {
  choice.addEventListener("click", () => {
    let userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
