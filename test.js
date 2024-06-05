window.botpressWebChat.init({
  "composerPlaceholder": "Chat with DeTrumpy..",
  "botConversationDescription": "This chatbot was built surprisingly fast with Botpress",
  "botId": "629290fa-c520-4bed-9f09-f567e2f867d4",
  "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
  "messagingUrl": "https://messaging.botpress.cloud",
  "clientId": "629290fa-c520-4bed-9f09-f567e2f867d4",
  "webhookId": "07cd87d7-ffe1-49f9-9ec5-51b3ff0f47da",
  "lazySocket": true,
  "themeName": "prism",
  "botName": "DeTrumpy",
  "enableConversationDeletion": true,
  "disableNotificationSound": true,
  "avatarUrl": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/881f9db0-c2c7-4b02-9fa8-1d6ac1a5a474/d8zc77s-7dd71113-82f7-434d-8d6f-d89c8a8971b2.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg4MWY5ZGIwLWMyYzctNGIwMi05ZmE4LTFkNmFjMWE1YTQ3NFwvZDh6Yzc3cy03ZGQ3MTExMy04MmY3LTQzNGQtOGQ2Zi1kODljOGE4OTcxYjIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.VQ0VC3xeMesyUmHGkHppeHetOZ1HSlXKt6Nl7ug5smM",
  "stylesheet": "https://webchat-styler-css.botpress.app/prod/code/c6e27471-02ec-469d-9816-89a1ff6d1ef4/v31736/style.css",
  "frontendVersion": "v1",
  "showPoweredBy": true,
  "theme": "prism",
  "themeColor": "#2563eb",
  "allowedOrigins": []
});

//Add Event Listener
document.addEventListener('keydown', (event) => add_key(event))
document.addEventListener('keyup', (event) => remove_key(event))

/*

  Trumpet feature variables

*/

//Variables
var canPlay = false;
var complete = true;
var visualization = true;
var hotkeypressed = {
  'Overtune':-1,
  'V1':false,
  'V2':false,
  'V3':false
}

//Hotkey
var hotkey = {
  'V1':[65, 97],
  'V2':[83, 115],
  'V3':[68, 100],
  '0':[74],
  '1':[75],
  '2':[76],
  '3':[186],
  '4':[222]
}

//Notes
var notes = {
  '1': ['Bb3', 'F4', 'Bb4', 'D5', 'F5'],
  '1-2': ['A3', 'E4', 'A4', 'C#5', 'E5'],
  '1-3': ['G3', 'D4', 'G4', 'B4', 'D5'],
  '1-2-3': ['F#3', 'C#4', 'F#4', 'Bb4', 'C#5'],
  '2': ['B3', 'F#4', 'B4', 'Eb5', 'F#5'],
  '2-3': ['Ab3', 'Eb4', 'Ab4', 'C5', 'Eb5'],
  'Open': ['C4', 'G4', 'C5', 'E5', 'G5']
}
// Sounds
var sounds = {
  "A3": new Audio("https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/629290fa-c520-4bed-9f09-f567e2f867d4/media/75ac2f5a-ec2b-40cf-a39f-7f242ea737bc.mpga"),
  "A4": new Audio("https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/629290fa-c520-4bed-9f09-f567e2f867d4/media/0330fff2-7e18-4bed-9ca0-8359a785058f.mpga"),
  "Ab3": new Audio("https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/629290fa-c520-4bed-9f09-f567e2f867d4/media/be95e6ce-0846-4f2d-a172-dca8d343a859.mpga"),
  "Ab4": new Audio("https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/629290fa-c520-4bed-9f09-f567e2f867d4/media/b4f0807f-033a-4fb0-ae9c-46e82c8dbf80.mpga"),
  "B3": new Audio("https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/629290fa-c520-4bed-9f09-f567e2f867d4/media/23337afa-e15f-460b-90e3-3fe967bc5a11.mpga"),
  "B4": new Audio("https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/629290fa-c520-4bed-9f09-f567e2f867d4/media/44712072-d45d-45d3-abe6-8d2493b8d4df.mpga"),
  "Bb3": new Audio("https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/629290fa-c520-4bed-9f09-f567e2f867d4/media/ab27046e-eadd-4227-8665-14bd6c3a7da7.mpga"),
  "Bb4": new Audio("https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/629290fa-c520-4bed-9f09-f567e2f867d4/media/a7290bbb-4f02-4f69-92dd-223e36d06a56.mpga"),
  "C4": new Audio("https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/629290fa-c520-4bed-9f09-f567e2f867d4/media/cd979c26-d034-42d0-a517-424ad66ced21.mpga"),
  "C5": new Audio("https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/629290fa-c520-4bed-9f09-f567e2f867d4/media/70150600-f53f-4f12-8e81-277705f87506.mpga"),
  "C#4": new Audio("https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/629290fa-c520-4bed-9f09-f567e2f867d4/media/5a0628e3-b1d4-42c2-858b-f0e6c92fe6d8.mpga"),
  "C#5": new Audio("https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/629290fa-c520-4bed-9f09-f567e2f867d4/media/c4ee69ac-3948-469a-96bd-e7d143580420.mpga"),
  "D4": new Audio("https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/629290fa-c520-4bed-9f09-f567e2f867d4/media/bd6f7b0f-e2db-4b26-8422-1ee88e169743.mpga"),
  "D5": new Audio("https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/629290fa-c520-4bed-9f09-f567e2f867d4/media/4b92e8b0-c405-4f90-84b3-df4a447c62ab.mpga"),
  "E4": new Audio("https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/629290fa-c520-4bed-9f09-f567e2f867d4/media/29033561-99ef-45b2-8bef-6ac6a10c9437.mpga"),
  "E5": new Audio("https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/629290fa-c520-4bed-9f09-f567e2f867d4/media/88e320b9-74a2-47bd-b60a-4de40f19db7e.mpga"),
  "Eb4": new Audio("https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/629290fa-c520-4bed-9f09-f567e2f867d4/media/948832f1-04d9-48ff-907e-5987fa5240ee.mpga"),
  "Eb5": new Audio("https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/629290fa-c520-4bed-9f09-f567e2f867d4/media/30aa1c9c-5f0d-47d6-9c84-18a82e9e344e.mpga"),
  "F4": new Audio("https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/629290fa-c520-4bed-9f09-f567e2f867d4/media/492fa2d8-db7b-4eb1-a62c-8eb64d32f226.mpga"),
  "F5": new Audio("https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/629290fa-c520-4bed-9f09-f567e2f867d4/media/fcc09b92-ca21-4a73-ad22-94257ed7a503.mpga"),
  "F#3": new Audio("https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/629290fa-c520-4bed-9f09-f567e2f867d4/media/c50bee2c-9882-44fe-baae-ce0035e8c9a9.mpga"),
  "F#4": new Audio("https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/629290fa-c520-4bed-9f09-f567e2f867d4/media/b04c4d59-2320-47a5-82c0-14be99f1c74a.mpga"),
  "F#5": new Audio("https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/629290fa-c520-4bed-9f09-f567e2f867d4/media/b8fdbc40-a32e-4fde-87c1-2a21eb9252d1.mpga"),
  "G3": new Audio("https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/629290fa-c520-4bed-9f09-f567e2f867d4/media/a74c0dc3-1a95-468f-ae59-e70d3458b53f.mpga"),
  "G4": new Audio("https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/629290fa-c520-4bed-9f09-f567e2f867d4/media/7729c132-d342-4476-96e6-330aa6ecbbef.mpga"),
  "G5": new Audio("https://s3.us-east-1.amazonaws.com/cloud-studio-botsbca2d619-1916w6llinepa/629290fa-c520-4bed-9f09-f567e2f867d4/media/36bc3f53-9c9a-4814-9670-6c3e714e1ec2.mpga"),
}
var old_Audio;

/*

  Trumpet function

*/
//Send hotkey
function sendHotkey(fingering_pattern, note) {
  window.botpressWebChat.sendPayload({
    type: 'trigger',
    payload: {
      fingering_pattern: fingering_pattern,
      note: note
    },
  })
}

//Play sound
function play_sound(notes) {
  if (sounds.hasOwnProperty(notes)) {
    //Play next note without disturbed by previous note
    if (old_Audio && !visualization) {
      old_Audio.pause();
      old_Audio.currentTime = 0;
    }
    
    sounds[notes].play();

    //Mark previous note audio object for pausing purpose
    old_Audio = sounds[notes];
  }
  
  complete = true;
  console.log(`${notes} completed.`);
}

//Identify notes
function identify_notes(fingering_pattern, overtune) {
  return notes[fingering_pattern][overtune];
}

//Identify fingering pattern
function identify_fingering_pattern() {
  let valves = hotkeypressed;
  var fingering_pattern;

  if (valves['V1'] == false && valves['V2'] == false && valves['V3'] == false) {
    fingering_pattern = 'Open';
  }
  else if (valves['V1'] == false && valves['V2'] == false && valves['V3'] == true) {
  }
  else if (valves['V1'] == false && valves['V2'] == true && valves['V3'] == false) {
    fingering_pattern = '2';
  }
  else if (valves['V1'] == false && valves['V2'] == true && valves['V3'] == true) {
    fingering_pattern = '2-3';
  }
  else if (valves['V1'] == true && valves['V2'] == false && valves['V3'] == false) {
    fingering_pattern = '1';
  }
  else if (valves['V1'] == true && valves['V2'] == false && valves['V3'] == true) {
    fingering_pattern = '1-3';
  }
  else if (valves['V1'] == true && valves['V2'] == true && valves['V3'] == false) {
    fingering_pattern = '1-2';
  }
  else if (valves['V1'] == true && valves['V2'] == true && valves['V3'] == true) {
    fingering_pattern = '1-2-3';
  }
  else {
    fingering_pattern = "";
  }

  return fingering_pattern;
}

//Play trumpet
function play_trumpet() {
  if (!canPlay || !complete) return;

  //Send log
  console.log("Played");
  console.log(hotkeypressed)

  if (visualization) {
    complete = false;
  }
  
  //Identify fingering pattern
  var fingering_pattern = identify_fingering_pattern(hotkeypressed['Overtune']);

  //Identify notes
  var note = identify_notes(fingering_pattern, hotkeypressed['Overtune']);

  //Play sound
  if (!note) {console.log("Unknown note!"); return;};

  if (!visualization) {
    play_sound(note);
  }
  else {
    sendHotkey(fingering_pattern, note);
  }
}

/*

  Hotkey function

*/


//Check if key pressed is hotkey
function check_if_hotkey(keypressed) {
  for (var key in hotkey) {
    if (hotkey[key].indexOf(keypressed) != -1) {
      return key;
    }
  }
}


//Add hotkey to hotkeypressed
function add_key(event) {
  //Exit
  if (event.keyCode == 27 && canPlay) {
    canPlay = false;
    
    console.log("Trumpet status: false")
    window.botpressWebChat.sendPayload({  
      type: 'trigger',
      payload: {
        "toggle_trumpet": false
      },
    })
    return;
  }

  //Add hotkey to hotkeypressed
  var key = check_if_hotkey(event.keyCode);
  if (key && hotkeypressed.hasOwnProperty(key) && hotkeypressed[key] != true) {
    hotkeypressed[key] = true;
  }
  else if (key && !hotkeypressed.hasOwnProperty(key)) {
    hotkeypressed['Overtune'] = parseInt(key);
    play_trumpet();
  }
}


//Remove hotkey from hotkeypressed
function remove_key(event) {

  //Remove hotkey from hotkeypressed
  var key = check_if_hotkey(event.keyCode);
  if (key && hotkeypressed.hasOwnProperty(key)&& hotkeypressed[key] != false) {
    hotkeypressed[key] = false;
  }
  else if (key && !hotkeypressed.hasOwnProperty(key)) {
    hotkeypressed.Overtune = -1;
  }
}


/*

  Event handler

*/

//Handle event
function event_handler(event) {
  console.log("**Event received**")
  if (event.value.hasOwnProperty('toggle_trumpet')) {
    canPlay = event.value['toggle_trumpet'];
    complete = true;
    console.log(`Trumpet status: ${canPlay}`);
  }
  else if (event.value.hasOwnProperty('notes')) {
    console.log(`Notes: ${event.value['notes']}`);
    if (visualization) {
      setTimeout(function(){play_sound(event.value['notes'])}, 1500);
    }
  }
  else if (event.value.hasOwnProperty('visualization')) {
    if (event.value['visualization']) {
      console.log(`Visualization enabled`);
    }
    else {
      console.log(`Visualization disabled`);
    }
    visualization = event.value['visualization'];
  }
}


//Start onEvent of chatbot
function startBot(event) {
  console.log("Chatbot loaded!")

  window.botpressWebChat.onEvent((event) => event_handler(event), ['TRIGGER'])
}

//Start function when chatbot loaded
window.botpressWebChat.onEvent((event) => startBot(event), ['LIFECYCLE.READY'])