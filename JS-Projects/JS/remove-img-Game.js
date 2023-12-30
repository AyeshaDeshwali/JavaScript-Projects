// let ans = document.querySelector("#box")
// ans.addEventListener('click', (e) => {
//     if (e.target.tagName === "IMG") {
//         e.target.remove()
//     }
// })

let ans = document.querySelector("#box");
ans.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    if (e.target.style.display === "none") {
      e.target.style.display = "block";
    } else {
      e.target.style.display = "none";
    }
  }
});
