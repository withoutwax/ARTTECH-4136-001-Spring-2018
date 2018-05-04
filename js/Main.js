let canvas, canvasContext;

let warrior = new Player();

window.onload = function() {
  canvas = document.getElementById("gameCanvas");
  canvasContext = canvas.getContext('2d');
  canvasContext.font = '24px serif';

  // IMAGE LOAD
  colorRect(0, 0, canvas.width, canvas.height, 'black');
  colorText("LOADING IMAGES", canvas.width/2, canvas.height/2, 'white');

  loadImages();

}

function imageLoadingDoneSoStartGame() {
  let framesPerSecond = 30;
  setInterval(updateAll, 1000/framesPerSecond);
  setupInput();

  loadLevel(level01_01, 'init');
}

function loadLevel(whichLevel, reset_status) {
  worldGrid = whichLevel.slice();
  console.log("Created new map");
  warrior.reset(playerAvatar, "Blue Storm", reset_status);
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
  colorText(warrior.keysHeld, 30, canvas.height-10, 'blue');


  // if (warrior.keyHeld_Action) {
  //   speech_ready = true;
  // }
  speechAction(speech_text);



}
