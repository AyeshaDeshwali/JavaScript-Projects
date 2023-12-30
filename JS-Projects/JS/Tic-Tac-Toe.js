let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-game");
let msgCon = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let trun = true;
let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (trun) {
      box.innerHTML = `<span style="color:yellow;">O</sapn>`;
      trun = false;
    } else {
      box.innerHTML = `<span style="color:#07f5f5;">X</sapn>`;
      trun = true;
    }
    box.disabled = true;
    check();
  });
});

const check = () => {
  for (let ans of winPatterns) {
    let posi1val = boxes[ans[0]].innerHTML;
    let posi2val = boxes[ans[1]].innerHTML;
    let posi3val = boxes[ans[2]].innerHTML;

    if (posi1val !== "" && posi2val !== "" && posi3val !== "") {
      if (posi1val === posi2val && posi2val === posi3val) {
        console.log("winner", posi1val);
        showWinner(posi1val);
      }
    }
  }
};

const showWinner = (winner) => {
  msg.innerHTML = `Congratulations, winner is ${winner}`;
  msgCon.classList.remove("hide");
  disableBox();
};

const restGame = () => {
  trun = true;
  enableBox(); // Corrected function name
  msgCon.classList.add("hide");
};

const disableBox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBox = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerHTML = "";
  }
};

newBtn.addEventListener("click", restGame);
resetBtn.addEventListener("click", restGame);
