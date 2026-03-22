import("./index.css");
let wrapBlock = document.querySelector(".weather");
let audio = document.getElementById("weatherSound");
let currentAudioSrc = null;
let volumeControl = document.querySelector(".sound");

if (volumeControl) {
  volumeControl.addEventListener("input", function () {
    if (!audio) return;
    audio.volume = parseFloat(volumeControl.value) / 100;
  });
}

wrapBlock.addEventListener("click", function (event) {
  let target = event.target;
  let block = target.closest(".weather__block");

  if (!block || !audio) return;

  let classList = block.classList;
  let newBackgroundImage;
  let newAudioSrc;

  if (classList.contains("weather__block--winter")) {
    newBackgroundImage = "url('./assets/winter-bg.jpg')";
    newAudioSrc = "./assets/sounds/winter.mp3";
  } else if (classList.contains("weather__block--summer")) {
    newBackgroundImage = "url('./assets/summer-bg.jpg')";
    newAudioSrc = "./assets/sounds/summer.mp3";
  } else if (classList.contains("weather__block--rain")) {
    newBackgroundImage = "url('./assets/rainy-bg.jpg')";
    newAudioSrc = "./assets/sounds/rain.mp3";
  } else {
    return;
  }

  document.body.style.backgroundImage = newBackgroundImage;

  if (currentAudioSrc !== newAudioSrc) {
    audio.pause();
    audio.src = newAudioSrc;
    currentAudioSrc = newAudioSrc;
    audio.play();
  } else {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }
});
