let playerAvatar = document.createElement("img");

let trackPics = [];
// let roadPic = document.createElement("img");
// let wallPic = document.createElement("img");
// let goalPic = document.createElement("img");
// let treePic = document.createElement("img");
// let flagPic = document.createElement("img");

let picsToLoad = 0;

function countLoadedImagesAndLaunchIfReady() {
  picsToLoad -= 1;
  // console.log(picsToLoad);
  if (picsToLoad == 0) {
    imageLoadingDoneSoStartGame();
  }
}

function beginLoadingImage(imgVar, fileName) {
  imgVar.onload = countLoadedImagesAndLaunchIfReady;
  imgVar.src = "images/" + fileName;
}

function loadImageForTrackCode(trackCode, fileName) {
  trackPics[trackCode] = document.createElement("img");
  beginLoadingImage(trackPics[trackCode], fileName);
}

function loadImages() {
  let imageList = [
    {varName: playerAvatar, theFile: "warrior.png"},

    {trackType: WORLD_GROUND, theFile: "world_ground.png"},
    {trackType: WORLD_WALL, theFile: "world_wall.png"},
    {trackType: WORLD_GOAL, theFile: "world_goal.png"},
    {trackType: WORLD_KEY, theFile: "world_key.png"},
    {trackType: WORLD_DOOR, theFile: "world_door.png"},

    // NAVIGATING SCENES & PLACES
    // {trackType: PLAYER_MAP_NAV, theFile: "world_ground.png"},

    {trackType: WORLD_NAVIGATION_00, theFile: "world_ground.png"},
    {trackType: WORLD_NAVIGATION_00_R, theFile: "world_ground.png"},

    // DIALOGUE
    {trackType: WORLD_INFO_01, theFile: "world_info.png"},
    {trackType: WORLD_INFO_02, theFile: "world_info.png"},
    {trackType: WORLD_INFO_03, theFile: "world_info.png"},
  ];

  picsToLoad = imageList.length;

  for (let i = 0; i < imageList.length; i++) {
    if (imageList[i].varName != undefined) {
      beginLoadingImage(imageList[i].varName, imageList[i].theFile);
    } else {
      loadImageForTrackCode(imageList[i].trackType, imageList[i].theFile);
    }

  }

}
