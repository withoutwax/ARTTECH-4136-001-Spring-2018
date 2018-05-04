const WORLD_W = 50;
const WORLD_H = 50;
const WORLD_GAP = 2;
const WORLD_COLS = 16;
const WORLD_ROWS = 13;
var level01_03 =  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
									 1, 1, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
									 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
									 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
									 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
									 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
									 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
									 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
									 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
									 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
									 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
									 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,// ROW END
									 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

 var level01_02 = [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
 									 1, 1, 1, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
 									 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
 									 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
 									 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
 									 1, 0, 0, 1, 1, 0, 6, 1, 1, 1, 1, 1, 0, 6, 1, 1,
 									 1, 0, 0, 1, 0, 0, 6, 0, 1, 1, 1, 0, 0, 6, 1, 1,
 									 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 5, 1, 1,
 									 1, 4, 0, 5, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1,
 									 1, 0, 0, 5, 0, 0, 1, 0, 0, 0, 5, 0, 0, 1, 1, 1,
 									 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1,
 									 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,// ROW END
 									 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

var level01_01 =  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
									 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
									 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 1, 1,
									 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1,
									 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1,
									 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1,
									 1, 7, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1,
									 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1,
									 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1,
									 1, 0, 0, 5, 0, 0, 8, 0, 0, 0, 0, 0, 0, 1, 1, 1,
									 1, 0, 2, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1,
									 1, 1, 1, 1, 6, 6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,// ROW END
									 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

// Support Multiple Levels
let levelList = [level01_01, level01_02, level01_03];
let levelNow = 1;
// let levelList = [theArena, slamZone];

let worldGrid = [];
const WORLD_GROUND = 0;
const WORLD_WALL = 1;
const PLAYER_START_POSITION = 2;
const WORLD_GOAL = 3;
const WORLD_KEY = 4;
const WORLD_DOOR = 5;
const WORLD_NAVIGATION = 6;

// WORLD_INFORMATION
const WORLD_INFO_01 = 7;
const WORLD_INFO_02 = 8;


function returnTileTypeAtColRow(col, row) {
  if (col >= 0 && col < WORLD_COLS &&
      row >= 0 && row < WORLD_ROWS) {
    let trackIndexUnderCoord = rowColToArrayIndex(col, row);
    return worldGrid[trackIndexUnderCoord];
  } else {
    return WORLD_WALL;
  }
}

function getTileIndexAtPixelCoord(atX, atY) {
	var warriorWorldCol = Math.floor(atX / WORLD_W);
	var warriorWorldRow = Math.floor(atY / WORLD_H);
	var worldIndexUnderWarrior = rowColToArrayIndex(warriorWorldCol, warriorWorldRow);

	if(warriorWorldCol >= 0 && warriorWorldCol < WORLD_COLS &&
		warriorWorldRow >= 0 && warriorWorldRow < WORLD_ROWS) {
		return worldIndexUnderWarrior;
	} // end of valid col and row

	return undefined;
} // end of warriorWorldHandling func


// function  playerHandling(player) {
//   let playerCol = Math.floor(player.x / WORLD_W);
//   let playerRow = Math.floor(player.y / WORLD_H);
//
//   let trackIndexUnderCar = rowColToArrayIndex(playerCol, playerRow);
//   // colorText(playerCol + "," + playerRow + ":" + trackIndexUnderMouse, mouseX, mouseY, 'yellow');
//
//   if (playerCol >= 0 && playerCol < WORLD_COLS &&
//       playerRow >= 0 && playerRow < WORLD_ROWS) {
//         let tileHere = returnTileTypeAtColRow(playerCol, playerRow)
//
//     if (tileHere == WORLD_GOAL) {
//       console.log(player.name + " WINS");
//
//       // Loading Next level once the character reaches the goal
// 			loadLevel(levelList[levelNow]);
//       if (levelNow == levelList.length-1) {
//         levelNow = 0
//       } else {
//         levelNow += 1;
//       }
//     } else if (tileHere != WORLD_GROUND) {
// 			// IF NOT GROUND (E.G - WALL DON'T MAKE THE WARRIOR PENETRATE THE WALL)
//       // player.x = 0;
//     }
//   }
// }

function rowColToArrayIndex(col, row) {
  return col + WORLD_COLS * row;
}

function drawTracks() {

  let arrayIndex = 0;
  let drawTileX = 0;
  let drawTileY = 0;

  for(let eachRow = 0; eachRow < WORLD_ROWS; eachRow++) {
    for(let eachCol = 0; eachCol < WORLD_COLS; eachCol++) {
      let tileKindHere = worldGrid[arrayIndex];
      let useImg = trackPics[tileKindHere];
			if (useImg != undefined) {
				// console.log(trackPics[tileKindHere]);
				// console.log(tileKindHere);
			}
      canvasContext.drawImage(useImg, drawTileX, drawTileY);

      arrayIndex += 1;
      drawTileX += WORLD_W;
    } // End of for each track
    drawTileX = 0;
    drawTileY += WORLD_H;
  }
} // End of drawBticks func
