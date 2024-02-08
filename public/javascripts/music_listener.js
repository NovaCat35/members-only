const sound = new Audio("../assets/portal-radio-tune.mp3");
const radio = document.getElementById("radio");
let isSoundOn = false;

sound.volume = 0.4;

// Function to handle the ended event and restart the audio playback
function handleEnded() {
    sound.currentTime = 0; // Reset audio to the beginning
    sound.play(); 
}

// Add event listener to handle click event on radio element
radio.addEventListener("click", () => {
    if (isSoundOn) {
        sound.pause();
    } else {
        sound.play();
    }
    isSoundOn = !isSoundOn;
});

// Handle the ended event on the audio element
sound.addEventListener("ended", handleEnded);
