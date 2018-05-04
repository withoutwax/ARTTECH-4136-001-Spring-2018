const WORLD_W = 50;
const WORLD_H = 50;
const WORLD_GAP = 2;
const WORLD_COLS = 16;
const WORLD_ROWS = 13;

let level01_01 =  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
									 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
									 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 1, 1,
									 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 1,
									 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1,
									 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 1,
									 1, 1001, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1,
									 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1,
									 1, 0, 4, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1,
									 1, 0, 0, 5, 0, 0, 1002, 0, 0, 0, 0, 0, 0, 1, 1, 1,
									 1, 0, 2, 1, 0, 100.5, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1,
									 1, 1, 1, 1, 100, 100, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,// ROW END
									 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

let level01_02 = [1, 1, 1, 1, 100, 100, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
									1, 1, 1, 1, 0, 100.5, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
									1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1003, 0, 1, 1,
									1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1,
									1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
									101, 101.5, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1,
									101, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1,
									1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 102.5, 102,
									1, 4, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1,
									1, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1,
									1, 0, 0, 1, 1, 1, 1, 1, 5, 5, 1, 1, 1, 1, 1, 1,
									1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1,// ROW END
									1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

let level01_03 =  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
									 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
									 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
									 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
									 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
									 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
									 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 101.5, 101,
									 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 101,
									 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
									 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
									 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
									 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,// ROW END
									 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

// NAV from level01_02
let level01_04 =  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
									 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
									 102, 102.5, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 4, 1, 1,
									 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1,
									 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1,
									 1, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1,
									 1, 0, 0, 5, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1,
									 1, 0, 0, 1, 1, 1, 1, 1, 0, 4, 1, 1, 0, 1, 1, 1,
									 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1,
									 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1,
									 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1,
									 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,// ROW END
									 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];


// let level01_03 =  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
// 									 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
// 									 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
// 									 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
// 									 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
// 									 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
// 									 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 101.5, 101,
// 									 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 101,
// 									 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
// 									 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
// 									 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1,
// 									 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,// ROW END
// 									 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

// Support Multiple Levels
// let levelList = [level01_01, level01_02, level01_03];
// let levelNow = 1;
// let levelList = [theArena, slamZone];

let worldGrid = [];
const WORLD_GROUND = 0;
const WORLD_WALL = 1;
const PLAYER_START_POSITION = 2;
const WORLD_GOAL = 3;
const WORLD_KEY = 4;
const WORLD_DOOR = 5;


// WARP to next screen
// const PLAYER_MAP_NAV = 100.5;

const WORLD_NAVIGATION_00 = 100;
const WORLD_NAVIGATION_00_R = 100.5;

const WORLD_NAVIGATION_01 = 101;
const WORLD_NAVIGATION_01_R = 101.5;

const WORLD_NAVIGATION_02 = 102;
const WORLD_NAVIGATION_02_R = 102.5;

// WORLD_INFORMATION
const WORLD_INFO_01 = 1001;
const WORLD_INFO_02 = 1002;
const WORLD_INFO_03 = 1003;


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
