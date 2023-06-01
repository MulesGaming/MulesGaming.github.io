// Message

console.log("player.js loaded");

// Custom element

let videoSRC;

class videoPlayerMain extends HTMLElement {
  constructor() {
    super();
    videoSRC = this.hasAttribute("video-src")
    ? this.getAttribute("video-src")
    : null;//backupvideo
    }
}

customElements.define('video-player-main', videoPlayerMain);

const videoPlayer = document.getElementById("videoPlayerMain");

// Write video

// Remove controls

const video = document.getElementById('testVideo');
const videoControls = document.getElementById('videoControls');

const videoWorks = !!document.createElement('video').canPlayType;

if (videoWorks) {
  video.controls = false;
  videoControls.classList.remove('hidden');
}

// Play button

const playButton = document.getElementById('play');
const playImage = `<svg fill="white" height="100%" version="1.1" viewBox="0 0 36 36" width="100%" id="playingButton""><use class="ytp-svg-shadow style-scope ytd-player" xlink:href="#ytp-id-11"></use><path class="ytp-svg-fill style-scope ytd-player" d="M 12,26 16,26 16,10 12,10 z M 21,26 25,26 25,10 21,10 z" id="ytp-id-11"></path></svg>`
const pauseImage = `<svg fill="white" height="100%" version="1.1" viewBox="0 0 36 36" width="100%" id="pausedButton"><use class="ytp-svg-shadow style-scope ytd-player" xlink:href="#ytp-id-70"></use><path class="ytp-svg-fill style-scope ytd-player" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z" id="ytp-id-70"></path></svg>`

function togglePlay() {
  if (video.paused || video.ended) {
    video.play();
    playButton.innerHTML = playImage;
  } else {
    video.pause();
    playButton.innerHTML = pauseImage;
  }
}

// Time

const timeElapsed = document.getElementById('time-elapsed');
const duration = document.getElementById('duration');

function giveTime (totalSeconds) { 
  const min = Math.floor(totalSeconds / 60)
  let sec = totalSeconds - 60*min
  return {
    min,
    sec
  }
}

function setVideoDuration() {
  const videoDuration = Math.round(video.duration);
  const time = giveTime(videoDuration);
  duration.innerText = `${time.min}:${time.sec}`;
}

//

function updateTimeElapsed() {
  const videoCurrentTime = Math.round(video.currentTime);
  const time = giveTime(videoCurrentTime);
  timeElapsed.innerText = `${time.min}:${time.sec}`;
}

video.addEventListener('timeupdate', updateTimeElapsed);

video.onloadedmetadata = function () {
  console.log("Video loaded")
  setVideoDuration()
}

// Full Screen

const main = document.getElementById("main")

function toggleFullscreen () {
  if (document.fullscreenElement) {
    // Check compatibility
    if (document.exitFullscreen){
      document.exitFullscreen();
    }else if (document.mozCancelFullScreen){
      document.mozCancelFullScreen();
    }else if (document.webkitExitFullscreen){
      document.webkitExitFullscreen();
    }else{
      alert("Your browser dosn't support fullscreen.")
      console.error("Browser dosn't support fullscreen.")
    }
  }else{
    // Set fullscreen
    // Check compatibility
    if (main.requestFullscreen){
      main.requestFullscreen();
    }else if (main.mozRequestFullScreen){
      main.mozRequestFullScreen();
    }else if (main.webkitRequestFullscreen){
      main.webkitRequestFullscreen();
    }else{
      alert("Your browser dosn't support fullscreen.")
      console.error("Browser dosn't support fullscreen.")
    }
  }
}

// Progress Bar

function getVideoPercent () {
  const videoCurrentTime = Math.round(video.currentTime);
  const videoDuration = Math.round(video.duration);
  
  const ratio = videoCurrentTime / videoDuration
  const fraction = ratio - Math.floor(ratio)
  const percentage = 100 * fraction
  return percentage
}

function setProgressBar () {
  const progressBar = document.getElementById("progressWatched")
  const videoCompletionPercentage = getVideoPercent () + "%"

  progressBar.style.width = videoCompletionPercentage
}

video.addEventListener('timeupdate', setProgressBar);

// Picture in Picture

function togglePicInPic () {
  if (video.requestPictureInPicture) {
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture();
    } else if (document.pictureInPictureEnabled) {
      video.requestPictureInPicture();
    }
  }else {
    alert("Your browser dosn't support Picture-in-Picture!");
    console.error("Browser dosn't support pic-in-pic mode.");
  }
}

// Volume

function setVideoVolume (value) {
  video.volume = value;
}

function volumeButtonClick () {
  const volumeButton = document.getElementById("volume");
  //
  const mutedVolumeSVG = `<svg id="mutedVolume" height="100%" version="1.1" viewBox="0 0 36 36" width="100%" fill="white"><path d="m 21.48,17.98 c 0,-1.77 -1.02,-3.29 -2.5,-4.03 v 2.21 l 2.45,2.45 c .03,-0.2 .05,-0.41 .05,-0.63 z m 2.5,0 c 0,.94 -0.2,1.82 -0.54,2.64 l 1.51,1.51 c .66,-1.24 1.03,-2.65 1.03,-4.15 0,-4.28 -2.99,-7.86 -7,-8.76 v 2.05 c 2.89,.86 5,3.54 5,6.71 z M 9.25,8.98 l -1.27,1.26 4.72,4.73 H 7.98 v 6 H 11.98 l 5,5 v -6.73 l 4.25,4.25 c -0.67,.52 -1.42,.93 -2.25,1.18 v 2.06 c 1.38,-0.31 2.63,-0.95 3.69,-1.81 l 2.04,2.05 1.27,-1.27 -9,-9 -7.72,-7.72 z m 7.72,.99 -2.09,2.08 2.09,2.09 V 9.98 z"></path></svg>`;
  const unmutedVolumeSVG = `<svg fill="white" id="unmutedVolume" height="100%" version="1.1" viewBox="0 0 36 36" width="100%"><path d="M8,21 L12,21 L17,26 L17,10 L12,15 L8,15 L8,21 Z M19,14 L19,22 C20.48,21.32 21.5,19.77 21.5,18 C21.5,16.26 20.48,14.74 19,14 ZM19,11.29 C21.89,12.15 24,14.83 24,18 C24,21.17 21.89,23.85 19,24.71 L19,26.77 C23.01,25.86 26,22.28 26,18 C26,13.72 23.01,10.14 19,9.23 L19,11.29 Z" fill="white" id="ytp-id-15"></path></svg>`;
  //
  if (volumeButton.classList.contains("muted")) {
    volumeButton.classList.remove("muted");
    setVideoVolume (1);
    volumeButton.innerHTML = unmutedVolumeSVG;
  }else {
  setVideoVolume (0);
  volumeButton.classList.add("muted");
  volumeButton.innerHTML = mutedVolumeSVG;
  }
}

function volumeButtonMouseOver () {
  // Set visibility
  const volumeControlMenu = document.getElementById("volumeControl");
  volumeControlMenu.style.visibility = "visible";
  // Padding
  const volumeButton = document.getElementById("volume");
  volumeButton.style.marginRight = "75px";
}

function volumeButtonMouseOff () {
  // Set visibility
  const volumeControlMenu = document.getElementById("volumeControl");
  volumeControlMenu.style.visibility = "hidden";
  // Padding
  const volumeButton = document.getElementById("volume");
  volumeButton.style.marginRight = "0px";

}

// Update volume text

function changeVideoVolumeButton (direction) {
  const currentVideoVolume = video.volume;
  // Modify volume
  if (direction === "increase") {
    setVideoVolume (currentVideoVolume + 0.1)
  }else if (direction === "decrease"){
    setVideoVolume (currentVideoVolume - 0.1)
  }else {
    console.error("Could not read direction to change volume! Please use increase or decrease.")
  }
  // Update
  updateVideoVolumeDisplay ()
}

updateVideoVolumeDisplay ()

function updateVideoVolumeDisplay () {
  const currentVideoVolume = video.volume;
  const videoVolumeDisplay = document.getElementById("currentVolume");
  const videoVolumePercent = currentVideoVolume*100;
  //
  videoVolumeDisplay.innerHTML = Math.floor(videoVolumePercent);
}