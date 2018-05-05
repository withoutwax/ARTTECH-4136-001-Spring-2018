let speech_ready = false;
let speech_on = false;
let speech_text = '';

function speechReady(item_info) {
  let speech01 = 'Where am I...? I am lost';
  let speech02 = 'I need to get out of here';
  let speech03 = 'What is this place...?';

  let scroll_01 = 'Now find an exit and go...!';

  switch(item_info) {
    case "world_01_info_01":
      console.log("speech_ready = true", item_info);
      speech_text = speech01;
      speech_ready = true;
      break;
    case "world_01_info_02":
      // console.log("speech_ready = true", item_info);
      speech_text = speech02;
      speech_ready = true;
      break;
    case "world_01_info_03":
      // console.log("speech_ready = true", item_info);
      speech_text = speech03;
      speech_ready = true;
      break;
    case "scroll_red_info_01":
      // console.log("speech_ready = true", item_info);
      speech_text = scroll_01;
      speech_ready = true;
      break;

    default:
      break;
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
    dialogueText(speech_text, 50, canvas.height-40, 'white');
  }
}
