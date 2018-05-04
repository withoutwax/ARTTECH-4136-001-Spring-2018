let speech_ready = false;
let speech_on = false;
let speech_text = '';

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
    dialogueText(speech_text, 50, canvas.height-40, 'blue');
  }
}
