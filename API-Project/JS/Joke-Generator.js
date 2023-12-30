let jokeContainer = document.getElementById("joke");
let btn = document.getElementById("btn");
let url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
let getJoke = () => {
  jokeContainer.classList.remove("fade");
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      jokeContainer.textContent = `${item.joke}`;
      jokeContainer.classList.add("fade");
    });
};
btn.addEventListener("click", getJoke);
getJoke();
