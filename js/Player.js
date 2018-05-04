// const GROUNDSPEED_DECAY_MULT = 0.94;
const PLAYER_MOVE_SPEED = 5;

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

    this.controlKeyUp;
    this.controlKeyRight;
    this.controlKeyDown;
    this.controlKeyLeft;

    this.keysHeld = 0;

  } // Constructor End

  setupInput(upKey, rightKey, downKey, leftKey) {
    this.controlKeyUp = upKey;
    this.controlKeyRight = rightKey;
    this.controlKeyDown = downKey;
    this.controlKeyLeft = leftKey;
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
        break;
      case WORLD_NAVIGATION:
        loadLevel(levelList[levelNow]);
        if (levelNow == levelList.length-1) {
          levelNow = 0
        } else {
          levelNow += 1;
        }
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