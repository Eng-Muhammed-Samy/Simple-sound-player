document.getElementById("play").addEventListener("click", function () {
  document.querySelector("audio").play();
});
document.getElementById("pause").addEventListener("click", function () {
  document.querySelector("audio").pause();
});
document.getElementById("stop").addEventListener("click", function () {
  document.querySelector("audio").pause();
  document.querySelector("audio").currentTime = 0;
});

document.querySelector("#volume").addEventListener("change", function (e) {
  document.querySelector("audio").volume = e.target.value;
});
var aud = document.querySelector("audio");
var music1 = document.querySelector("#song1");
music1.addEventListener("click", () => {
  pic.setAttribute("src", "image/1.jpg");
  aud.setAttribute("src", "audio/1.mp3");
  aud.play();
});
var music2 = document.querySelector("#song2");
music2.addEventListener("click", () => {
  pic.setAttribute("src", "image/2.jpg");
  aud.setAttribute("src", "audio/2.mp3");
  aud.play();
});
var music3 = document.querySelector("#song3");
var pic = document.querySelector("#pic");
music3.addEventListener("click", () => {
  pic.setAttribute("src", "image/3.jpg");
  aud.setAttribute("src", "audio/3.mp3");
  aud.play();
});
var music4 = document.querySelector("#song4");
music4.addEventListener("click", () => {
  pic.setAttribute("src", "image/4.jpg");
  aud.setAttribute("src", "audio/4.mp3");
  aud.play();
});
var music5 = document.querySelector("#song5");
music5.addEventListener("click", () => {
  pic.setAttribute("src", "image/5.jpg");
  aud.setAttribute("src", "audio/5.mp3");
  aud.play();
});
var music6 = document.querySelector("#song6");
music6.addEventListener("click", () => {
  pic.setAttribute("src", "image/6.jpg");
  aud.setAttribute("src", "audio/6.mp3");
  aud.play();
});
