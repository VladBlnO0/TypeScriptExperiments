import process from "node:process";
import { emitKeypressEvents } from "node:readline";

setUpTerminal();

let state = {
  x: 0,
  y: 0,
  targetX: 9,
  targetY: 9,
  interval: setInterval(function () {
    moveTarget();
  }, 1_000),
};

process.stdin.on("keypress", function (_, key) {
  if (key.name === "q") {
    gameOver();
    return;
  }

  if (key.name === "left") {
    state.x--;
  }
  if (key.name === "right") {
    state.x++;
  }
  if (key.name === "up") {
    state.y--;
  }
  if (key.name === "down") {
    state.y++;
  }
  update();
});

function update() {
  if (state.x === state.targetX && state.y === state.targetY) {
    gameOver();
  }
  render();
}

function render() {
  console.clear();
  process.stdout.cursorTo(state.x, state.y);
  process.stdout.write("x");

  process.stdout.cursorTo(state.targetX, state.targetY);
  process.stdout.write("0");
}

function setUpTerminal() {
  emitKeypressEvents(process.stdin);
  process.stdin.setRawMode(true);

  process.stdout.write("\x1b[?1049h");
  process.stdout.write("\x1B[?25l");
}

function gameOver() {
  process.stdout.write("\x1b[?1049l");
  process.stdout.write("\x1B[?25h");

  process.exit();
}

function moveTarget() {
  if (Math.random() < 0.5) {
    state.targetX--;
  } else {
    state.targetX++;
  }

  if (Math.random() < 0.5) {
    state.targetY--;
  } else {
    state.targetY++;
  }

  update();
}
