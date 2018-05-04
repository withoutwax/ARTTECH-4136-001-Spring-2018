let canvas, canvasContext;

let warrior = new Player();

window.onload = function() {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext('2d');

  // IMAGE LOAD
  colorRect(0, 0, canvas.width, canvas.height, 'black');
  colorText("LOADING IMAGES", canvas.width/2, canvas.height/2, 'white');

  loadImages();

}

function imageLoadingDoneSoStartGame() {
  let framesPerSecond = 30;
  setInterval(updateAll, 1000/framesPerSecond);
  setupInput();

  loadLevel(level01_01);
}

function loadLevel(whichLevel) {
  worldGrid = whichLevel.slice();
  console.log("Created new map");
  warrior.reset(playerAvatar, "Blue Storm");
  console.log("Placed Player!")

}

function updateAll() {
  moveAll();
  drawAll();
}

function moveAll() {
  warrior.move();

}

function clearScreen() {
  colorRect(0, 0, canvas.width, canvas.height, 'black'); // Background
}

function drawAll() {
  // clearScreen();
  drawTracks();
  warrior.draw();
  colorText("Keys: ", 10, canvas.height-10, 'blue');
  colorText(warrior.keysHeld, 30, canvas.height-10, 'blue')
}
