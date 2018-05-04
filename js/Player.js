// const GROUNDSPEED_DECAY_MULT = 0.94;
const PLAYER_MOVE_SPEED = 5;
let speech_ready = false;
let speech_on = false;
let speech_text = '';

class Player {
  constructor() {
    this.x = 75;
    this.y = 75;
    this.PlayerAvatar;
    this.name = "Player 01";

    this.keyHeld_Top = false;
    this.keyHeld_Down = false;
    this.keyHeld_Left = false;
    this.keyHeld_Right = false;

    this.keyHeld_Action = false;

    this.controlKeyUp;
    this.controlKeyRight;
    this.controlKeyDown;
    this.controlKeyLeft;
    this.controlAction;

    this.keysHeld = 0;

  } // Constructor End

  setupInput(upKey, rightKey, downKey, leftKey, actionKey) {
    this.controlKeyUp = upKey;
    this.controlKeyRight = rightKey;
    this.controlKeyDown = downKey;
    this.controlKeyLeft = leftKey;

    this.controlAction = actionKey;
  }

  reset(whichImage, playerName) {
    this.name = playerName;
    this.PlayerAvatar = whichImage;

    for(let eachRow = 0; eachRow < WORLD_ROWS; eachRow++) {
      for(let eachCol = 0; eachCol < WORLD_COLS; eachCol++) {

        let arrayIndex = rowColToArrayIndex(eachCol, eachRow);
        if (worldGrid[arrayIndex] == PLAYER_START_POSITION) {
          worldGrid[arrayIndex] = WORLD_GROUND;
          // this.ang = -Math.PI/2;
          this.x = eachCol * WORLD_W + WORLD_W/2;
          this.y = eachRow * WORLD_H + WORLD_H/2;
          return;
        }
      }
    }
    console.log("NO PLAYER START FOUND");
  }

  move() {
    let nextX = this.x;
    let nextY = this.y;
    // this.speed *= GROUNDSPEED_DECAY_MULT;

    if (this.keyHeld_Top) {
      nextY -= PLAYER_MOVE_SPEED;
    }
    if (this.keyHeld_Down) {
      nextY += PLAYER_MOVE_SPEED;
    }
    if (this.keyHeld_Left) {
      nextX -= PLAYER_MOVE_SPEED;
    }
    if (this.keyHeld_Right) {
      nextX += PLAYER_MOVE_SPEED;
    }

    var walkIntoTileIndex = getTileIndexAtPixelCoord(nextX, nextY);
    // console.log(walkIntoTileIndex);
    var walkIntoTileType = WORLD_WALL;

    if(walkIntoTileIndex != undefined) {
      walkIntoTileType = worldGrid[walkIntoTileIndex];
    }

    switch(walkIntoTileType) {
			case WORLD_GROUND:
				this.x = nextX;
				this.y = nextY;
				break;
			case WORLD_GOAL:
				console.log(this.name + " WINS!");
				// loadLevel(level01_01);
				break;
			case WORLD_DOOR:
				if(this.keysHeld > 0) {
					this.keysHeld--; // one less key
					// this.updateKeyReadout();
          console.log("KEYS:", this.keysHeld);
					worldGrid[walkIntoTileIndex] = WORLD_GROUND;
				}
				break;
			case WORLD_KEY:
				this.keysHeld++; // one more key
				// this.updateKeyReadout();
        console.log("KEYS:", this.keysHeld);
				worldGrid[walkIntoTileIndex] = WORLD_GROUND;
				break;
			case WORLD_WALL:
        speech_ready = false; // DEBUGING PURPOSE
        break;
      case WORLD_NAVIGATION:
        loadLevel(levelList[levelNow]);
        if (levelNow == levelList.length-1) {
          levelNow = 0
        } else {
          levelNow += 1;
        }
        break;
      case WORLD_BOOK:
        // console.log("this is a book!");
        speechReady('book');

        break;
			default:
				break;
		}

    // playerHandling(this);
    // this.x += this.speedX;
    // this.y += this.speedY;
    // this.ang += 0.02;
  }
  draw() {
    drawBitmapCenteredWithRotation(this.PlayerAvatar, this.x, this.y, 0);
  }

}
function speechReady(item_info) {
  let speech01 = 'Where am I...? I am lost';


  if (item_info == 'book') {
    console.log("speech_ready = true", item_info);
    speech_text = speech01
    speech_ready = true;
  }

}

function speechAction(speech_text) {
  if (speech_on && speech_ready && !warrior.keyHeld_Action) {
    console.log(warrior.keyHeld_Action);
    speech_ready = false;
  }
  if (speech_on && !speech_ready && warrior.keyHeld_Action) {
    speech_on = false;
  }

  if (warrior.keyHeld_Action && speech_ready) {
    console.log("speech_on = true");
    speech_on = true;
  }

  if (speech_on) {
    colorRect(0, 500, canvas.width, 300, 'black');
    colorText(speech_text, 10, canvas.height-30, 'blue');
  }
}
