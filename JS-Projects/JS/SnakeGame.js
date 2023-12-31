const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

const gridSize = 10;
const snakeColor = "#006600";
const foodColor = "#FF0000";

let snake = [{ x: 10, y: 10 }];
let food = { x: 5, y: 5 };
let dx = 1;
let dy = 0;

function drawSnake() {
  snake.forEach((segment) => {
    context.fillStyle = snakeColor;
    context.fillRect(
      segment.x * gridSize,
      segment.y * gridSize,
      gridSize,
      gridSize
    );
  });
}

function drawFood() {
  context.fillStyle = foodColor;
  context.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
}

function update() {
  const newHead = { x: snake[0].x + dx, y: snake[0].y + dy };
  snake.unshift(newHead);

  if (newHead.x === food.x && newHead.y === food.y) {
    food.x = Math.floor(Math.random() * (canvas.width / gridSize));
    food.y = Math.floor(Math.random() * (canvas.height / gridSize));
  } else {
    snake.pop();
  }
}

function checkCollision() {
  if (
    snake[0].x < 0 ||
    snake[0].x >= canvas.width / gridSize ||
    snake[0].y < 0 ||
    snake[0].y >= canvas.height / gridSize
  ) {
    clearInterval(game);
    alert("Game Over");
  }

  for (let i = 1; i < snake.length; i++) {
    if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
      clearInterval(game);
      alert("Game Over");
    }
  }
}

function gameLoop() {
  context.clearRect(0, 0, canvas.width, canvas.height);

  drawFood();
  drawSnake();
  update();
  checkCollision();
}

const game = setInterval(gameLoop, 100);

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      if (dy === 0) {
        dx = 0;
        dy = -1;
      }
      break;
    case "ArrowDown":
      if (dy === 0) {
        dx = 0;
        dy = 1;
      }
      break;
    case "ArrowLeft":
      if (dx === 0) {
        dx = -1;
        dy = 0;
      }
      break;
    case "ArrowRight":
      if (dx === 0) {
        dx = 1;
        dy = 0;
      }
      break;
  }
});
