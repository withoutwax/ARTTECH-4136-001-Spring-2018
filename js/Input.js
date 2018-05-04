const KEY_LEFT_ARROW = 37;
const KEY_UP_ARROW = 38;
const KEY_RIGHT_ARROW = 39;
const KEY_DOWN_ARROW = 40;

// const KEY_W = 87;
// const KEY_A = 65;
// const KEY_S = 83;
// const KEY_D = 68;


let mouseX = 0;
let mouseY = 0;

function setupInput() {
  canvas.addEventListener('mousemove', updateMousePos);

  document.addEventListener('keydown', keyPressed);
  document.addEventListener('keyup', keyReleased);

  warrior.setupInput(KEY_UP_ARROW, KEY_RIGHT_ARROW, KEY_DOWN_ARROW, KEY_LEFT_ARROW);
}

function updateMousePos(e) {
  let rect = canvas.getBoundingClientRect();
  let roots = document.documentElement;

  mouseX = e.clientX - rect.left - roots.scrollLeft;
  mouseY = e.clientY - rect.top - roots.scrollTop;

  // Cheat
  // carX = mouseX;
  // carY = mouseY;
  // carSpeedX = 3;
  // carSpeedY = -4;
}

function keySet(keyEvent, player, setTo) {
  if (keyEvent.keyCode == player.controlKeyLeft) {
    player.keyHeld_Left = setTo;
  }
  if (keyEvent.keyCode == player.controlKeyRight) {
    player.keyHeld_Right = setTo;
  }
  if (keyEvent.keyCode == player.controlKeyUp) {
    player.keyHeld_Top = setTo;
  }
  if (keyEvent.keyCode == player.controlKeyDown) {
    player.keyHeld_Down = setTo;
  }
}

function keyPressed(e) {
  keySet(e, warrior, true);
  e.preventDefault();
}

function keyReleased(e) {
  // console.log("Key Released " + e.keyCode);
  keySet(e, warrior, false);
}