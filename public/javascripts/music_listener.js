const sound = new Audio("../assets/portal-radio-tune.mp3");
const radio = document.getElementById("radio");
let isSoundOn = false;
sound.volume = 0.2; 

radio.addEventListener("click", () => {
   if (isSoundOn) {
      sound.pause();
   } else {
      sound.play();
   }
   isSoundOn = !isSoundOn;
});