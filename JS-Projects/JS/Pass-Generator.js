const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "~!@#$%^&*()_+/";

const passBox = document.getElementById("pass-box");
const totalChar = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");

const randomget = (pass) => {
  return pass[Math.floor(Math.random() * pass.length)];
};

const genpass = (password = "") => {
  if (upperInput.checked) {
    password += randomget(upperSet);
  }
  if (lowerInput.checked) {
    password += randomget(lowerSet);
  }
  if (numberInput.checked) {
    password += randomget(numberSet);
  }
  if (symbolInput.checked) {
    password += randomget(symbolSet);
  }
  if (password.length < totalChar.value) {
    return genpass(password);
  }
  passBox.innerText = truncateString(password, totalChar.value);
};

document.getElementById("btn").addEventListener("click", () => genpass());

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num);
  } else {
    return str;
  }
}
