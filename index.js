// Query all the buttons so we can use it in our iteration
var buttons = document.querySelectorAll("button");
var buttonCount = buttons.length;

// Add a 'click' event listener to our buttons
// so user will hear a sound when a button is clicked
for (var i = 0; i < buttons.length; i++) {
  let buttonKey = buttons[i].innerHTML;
  buttons[i].addEventListener("click", function() {
    playAudio(buttonKey);
    buttonAnimation(buttonKey);
  });
}

// Add a 'keydown' event listener to our document
// so user will hear a sound based on the key that was pressed
document.addEventListener("keydown", function(event) {
  playAudio(event.key);
  buttonAnimation(event.key);
})

// Play an audio based on the given key
function playAudio(key) {
  key = key.toLowerCase();  // handle case sensitivity

  // Map and play the audio file based on the given key
  switch (key) {
    case "w":
      play("sounds/tom-1.mp3");
      break;

    case "a":
      play("sounds/tom-2.mp3");
      break;

    case "s":
      play("sounds/tom-3.mp3");
      break;

    case "d":
      play("sounds/tom-4.mp3");
      break;

    case "j":
      play("sounds/snare.mp3");
      break;

    case "k":
      play("sounds/crash.mp3");
      break;

    case "l":
      play("sounds/kick-bass.mp3");
      break;

    default:
      console.log("Key not assigned to any instrument: " + key);
      break;
  }
}
//Extra code
// Play an audio from source
function play(sourceFile) {
  let audio = new Audio(sourceFile);
  audio.play();
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100); // 100 is 0,1 second you can change animation time
}



// Advanced code shortened
// var buttons = document.querySelectorAll(".drum");
// var keys = ['w', 'a', 's', 'd', 'j', 'k', 'l'];
// var drums = ['tom-1', 'tom-2', 'tom-3', 'tom-4', 'snare', 'crash', 'kick-bass'];
//
// // Add a 'click' event listener to our buttons
// // so user will hear a sound when a button is clicked
// for (var i = 0; i < buttons.length; i++) {
//   let buttonKey = buttons[i].innerHTML;
//   buttons[i].addEventListener("click", function() {
//     playAudio(buttonKey);
//     animateButton(buttonKey);
//   });
// }
//
// // Add a 'keydown' event listener to our document
// // so user will hear a sound based on the key that was pressed
// document.addEventListener("keydown", function(event) {
//   playAudio(event.key);
//   animateButton(event.key);
// })
//
// // Play an audio based on the given key
// function playAudio(key) {
//   key = key.toLowerCase();  // handle case sensitivity
//
//   if (!keys.includes(key)) {
//     return;
//   }
//
//   let soundFile = "sounds/" + drums[keys.indexOf(key)] + ".mp3";
//   let audio = new Audio(soundFile);
//   audio.play();
// }
//
// // Add animation to button when pressed
// function animateButton(key) {
//   key = key.toLowerCase();
//
//   if (!keys.includes(key)) {
//     return;
//   }
//
//   let button = document.querySelector('.' + key);
//   button.classList.add("pressed");
//
//   setTimeout(() => {
//     button.classList.remove("pressed");
//   }, 100);
// }
