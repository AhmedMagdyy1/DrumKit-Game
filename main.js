// when click with mouse--------------------

var array = document.querySelectorAll("button");
for (let i = 0; i < array.length; i++) {
  var btnClicked = document.querySelectorAll("button")[i];
  btnClicked.addEventListener("click", function (e) {
    // e.target.innerHTML;
    // console.log(e.target.innerHTML);
    // this.innerHTML;
    // console.log(this.innerHTML);
    var buttonKey = this.innerHTML;
    makeSound(buttonKey);
    btnAnimation(buttonKey);
  });
}
// when click with keyboard--------------------

document.addEventListener("keypress", function (e) {
  makeSound(e.key);
  btnAnimation(e.key);
});
// to make the sound------------------------

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    default:
      break;
  }
}
// to make animation with key--------------------------

function btnAnimation(currentKey) {
  var activeBtn = document.querySelector("." + currentKey);
  activeBtn.classList.add("pressed");
  setTimeout(function () {
    activeBtn.classList.remove("pressed");
  }, 100);
}
