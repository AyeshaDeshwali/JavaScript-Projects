const endDate = "30 December 2023 02:06:00 PM";
document.getElementById("endDate").innerText = endDate;
const input = document.querySelectorAll("input");
const clock = () => {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000;
  if (diff < 0) {
    return; // Agar countdown khatam ho gaya hai toh function yahaan se bahar nikal jayega - me ni dkaye dega 0 set ho jaya ki ye time date nikl chuke h
  }
  input[0].value = Math.floor(diff / 3600 / 24);
  input[1].value = Math.floor((diff / 3600) % 24);
  input[2].value = Math.floor((diff / 60) % 60);
  input[3].value = Math.floor(diff % 60);
  console.log(end);
  console.log(now);
  console.log(diff);
  // Math.floor se decimal values ko chhod kar sirf integer values ko lete hain.
};
clock(); // Pehli baar clock function ko call karo
// Fir setInterval ka istemal karke har ek second mein clock function ko call karo
setInterval(() => {
  clock();
}, 1000);
