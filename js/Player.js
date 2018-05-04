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

  reset(whichImage, playerName, reset_status) {
    this.name = playerName;
    this.PlayerAvatar = whichImage;
    console.log(reset_status);

    if (reset_status == "init") { // If the reset function is for starting a new game
      for(let eachRow = 0; eachRow < WORLD_ROWS; eachRow++) {
        for(let eachCol = 0; eachCol < WORLD_COLS; eachCol++) {

          let arrayIndex = rowColToArrayIndex(eachCol, eachRow);
          if (worldGrid[arrayIndex] == PLAYER_START_POSITION) { // Start player at map = '2'
            worldGrid[arrayIndex] = WORLD_GROUND;

            this.x = eachCol * WORLD_W + WORLD_W/2;
            this.y = eachRow * WORLD_H + WORLD_H/2;
            return;
          }
        }
      }
    } else if (reset_status == 'nav') { // If the reset function is just for navigation (map change)
      for(let eachRow = 0; eachRow < WORLD_ROWS; eachRow++) {
        for(let eachCol = 0; eachCol < WORLD_COLS; eachCol++) {

          let arrayIndex = rowColToArrayIndex(eachCol, eachRow);
          if (worldGrid[arrayIndex] == PLAYER_MAP_NAV) { // Start player at map = '2'
            // worldGrid[arrayIndex] = WORLD_GROUND;

            this.x = eachCol * WORLD_W + WORLD_W/2;
            this.y = eachRow * WORLD_H + WORLD_H/2;
            return;
          }
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
      case PLAYER_MAP_NAV:
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
      case WORLD_NAVIGATION_00:
        // for (let i = 0; i < worldGrid.length; i++) {
        //   if (worldGrid[i] == 9) {
        //     worldGrid[i] = 2;
        //   }
        // }
        // worldGrid[walkIntoTileIndex] = 2;
        level01_01 = worldGrid;
        loadLevel(level01_02, 'nav');
        // console.log(worldGrid);
        break;
      case WORLD_NAVIGATION_00_R:
        loadLevel(level01_01, 'nav');
      // case WORLD_INFO:
      //   // console.log("this is a book!");
      //   speechReady('book');
      //
      //   break;
			default:
				break;
		}

    // For dialogue
    switch(walkIntoTileType) {
      case WORLD_INFO_01:
        speechReady('world_01_info_01');
        break;
      case WORLD_INFO_02:
        speechReady('world_01_info_02');
        break;
      case WORLD_INFO_03:
        speechReady('world_01_info_03');
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
