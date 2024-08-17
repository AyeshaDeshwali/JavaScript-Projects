let uperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let loverSet = "abcdefghijklmnopqrstuvwxyz";
let numSet = "1234567890";
let symSet = "!@#$%^&*()_+-";

let passBox = document.getElementById("pass-box");
let totalChar = document.getElementById("total-char");
let uperInput = document.getElementById("upper-case");
let lowerInput = document.getElementById("lower-case");
let symInput = document.getElementById("symbols");
let numInput = document.getElementById("numbers");

function randomNum(randomNum) {
  return randomNum[Math.floor(Math.random() * randomNum.length)];
}

function genPass(pass = "") {
  if (uperInput.checked) {
    pass += randomNum(uperSet);
  }
  if (lowerInput.checked) {
    pass += randomNum(loverSet);
  }
  if (numInput.checked) {
    pass += randomNum(numSet);
  }
  if (symInput.checked) {
    pass += randomNum(symSet);
  }
  if (pass.length < totalChar.value) {
    return genPass(pass);
  }

  passBox.innerText = truncateString(pass, totalChar.value);
  console.log(pass);
}
genPass();

document.getElementById("btn").addEventListener("click", () => {
  genPass();
});

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num);
  } else {
    return str;
  }
}
