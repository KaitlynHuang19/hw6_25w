var video;

window.addEventListener("load", function () {
  console.log("Good job opening the window");

  video = document.getElementById("player1");

  // Initialize settings
  video.autoplay = false;
  video.loop = false;
  video.load(); // reloads with new settings

  // Play
  document.getElementById("play").addEventListener("click", function () {
    video.play();
    updateVolumeDisplay();
    console.log("Play Video");
  });

  // Pause
  document.getElementById("pause").addEventListener("click", function () {
    video.pause();
    console.log("Pause Video");
  });

  // Slow Down
  document.getElementById("slower").addEventListener("click", function () {
    video.playbackRate *= 0.9;
    console.log("New speed:", video.playbackRate.toFixed(5));
  });

  // Speed Up
  document.getElementById("faster").addEventListener("click", function () {
    video.playbackRate /= 0.9;
    console.log("New speed:", video.playbackRate.toFixed(5));
  });

  // Skip Ahead
  document.getElementById("skip").addEventListener("click", function () {
    if (video.currentTime + 10 >= video.duration) {
      video.currentTime = 0;
    } else {
      video.currentTime += 10;
    }
    console.log("Current location:", video.currentTime.toFixed(2));
  });

  // Mute / Unmute
  document.getElementById("mute").addEventListener("click", function () {
    video.muted = !video.muted;
    this.textContent = video.muted ? "Unmute" : "Mute";
  });

  // Volume Slider
  document.getElementById("slider").addEventListener("input", function () {
    video.volume = this.value / 100;
    updateVolumeDisplay();
  });

  // Old School
  document.getElementById("vintage").addEventListener("click", function () {
    video.classList.add("oldSchool");
  });

  // Original
  document.getElementById("orig").addEventListener("click", function () {
    video.classList.remove("oldSchool");
  });
});

// Helper: Update volume text
function updateVolumeDisplay() {
  var volumeText = document.getElementById("volume");
  volumeText.textContent = Math.round(video.volume * 100) + "%";
}
