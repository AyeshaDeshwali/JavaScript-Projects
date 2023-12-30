const item = document.querySelector("#item");
const toDoBox = document.querySelector("#todolist");
item.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addToDo(item.value);
    item.value = "";
  }
});
const addToDo = (todoText) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
        ${todoText}
        <i class="fas fa-times"></i>
    `;

  listItem.addEventListener("click", () => {
    listItem.classList.toggle("done");
  });
  listItem.querySelector("i").addEventListener("click", () => {
    listItem.remove();
  });
  toDoBox.appendChild(listItem);
};
