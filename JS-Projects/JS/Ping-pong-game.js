// Get the canvas and 2D context
const canvas = document.getElementById("myGame");
const context = canvas.getContext("2d");

// Define the computer paddle
const com = {
  x: canvas.width / 2 - 50 / 2,
  y: 10,
  width: 50,
  height: 10,
  color: "white",
  score: 0,
};

// Define the user paddle
const user = {
  x: canvas.width / 2 - 50 / 2,
  y: canvas.height - 20,
  width: 50,
  height: 10,
  color: "white",
  score: 0,
};

// Define the ball
const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 10,
  speed: 1,
  velocityX: 5,
  velocityY: 5,
  color: "white",
};

// Function to draw a rectangle
function drawRect(x, y, w, h, color) {
  context.fillStyle = color;
  context.fillRect(x, y, w, h);
}

// Function to draw the center line
function centerLine() {
  context.beginPath();
  context.setLineDash([10]);
  context.moveTo(0, canvas.height / 2);
  context.lineTo(canvas.width, canvas.height / 2);
  context.strokeStyle = "white";
  context.stroke();
}

// Function to draw a circle
function drawCircle(x, y, r, color) {
  context.fillStyle = color;
  context.beginPath();
  context.arc(x, y, r, 0, Math.PI * 2, false);
  context.closePath();
  context.fill();
}

// Function to draw text
function drawText(text, x, y, color) {
  context.fillStyle = color;
  context.font = "32px josefin sans";
  context.fillText(text, x, y);
}

// Function to render the game
function render() {
  // Draw the background
  drawRect(0, 0, canvas.width, canvas.height, "black");

  // Draw the computer paddle
  drawRect(com.x, com.y, com.width, com.height, com.color);

  // Draw the user paddle
  drawRect(user.x, user.y, user.width, user.height, user.color);

  // Draw the center line
  centerLine();

  // Draw the ball
  drawCircle(ball.x, ball.y, ball.radius, ball.color);

  // Draw the scores of the computer and user
  drawText(com.score, 20, canvas.height / 2 - 30, "white");
  drawText(user.score, 20, canvas.height / 2 + 50, "white");
}

// Event listener for user paddle movement
canvas.addEventListener(
  "mousemove",
  (e) =>
    (user.x = e.clientX - canvas.getBoundingClientRect().left - user.width / 2)
);

// Function to check collision between the ball and paddle
function collision(b, p) {
  return (
    p.x < b.x + b.radius &&
    p.x + p.width > b.x - b.radius &&
    p.y < b.y + b.radius &&
    p.y + p.height > b.y - b.radius
  );
}

// Function to reset the ball
function resetBall() {
  ball.x = canvas.width / 2;
  ball.y = canvas.height / 2;
  ball.speed = 1;
  ball.velocityY = -ball.velocityY;
}

// Function to display game over
function ShowGameOver() {
  canvas.style.display = "none";
  const can = document.getElementById("can");
  can.style.display = "none";
  const result = document.getElementById("result");
  result.style.display = "block";
}

// Function to update the game
function update() {
  ball.x += ball.velocityX * ball.speed;
  ball.y += ball.velocityY * ball.speed;

  com.x += (ball.x - (com.x + com.width / 2)) * 0.1;
  if (ball.speed > 2) com.x += ball.x + 100;

  if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0)
    ball.velocityX = -ball.velocityX;

  let player = ball.y < canvas.height / 2 ? com : user;
  if (collision(ball, player)) {
    ball.velocityY = -ball.velocityY;
    ball.speed += 0.1;
  }

  if (ball.y - ball.radius < 0) {
    user.score++;
    resetBall();
  } else if (ball.y + ball.radius > canvas.height) {
    com.score++;
    resetBall();
  }

  if (user.score > 4 || com.score > 4) {
    clearInterval(loop);
    ShowGameOver();
  }
}

// Function to start the game
function start() {
  update();
  render();
}

// Set up the game loop
const loop = setInterval(start, 1000 / 50);
