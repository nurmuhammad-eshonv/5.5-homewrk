const playBtn = document.getElementById("play");
const audioEl = document.getElementById("audio");
const coverEl = document.getElementById("cover");
const wrapperEl = document.querySelector(".wrapper");
const playBntToggle = document.querySelector("#play-btn-toggle");
const changeVolume = document.getElementById("changeVolume");
const backwordEl = document.getElementById("backword");
const forwordEl = document.querySelector(".forword");
const moodEl = document.getElementById("mood");

const tracks = [
  "Konsta-Insonlar",
  "Konsta-Odamlar-nima-deydi",
  "I-Got-Love",
  "Люби-меня",
  "Fire-Man",
  "Miyagi-Captain",
];

let currentTrack = 0;

const changeTrack = (i) => {
  audioEl.src = `/music/${tracks[i]}.mp3`;
  coverEl.src = `/img/${tracks[i]}.jpg`;
};
changeTrack(currentTrack);

playBtn.addEventListener("click", () => {
  if (wrapperEl.classList.contains("play")) {
    wrapperEl.classList.remove("play");
    playBntToggle.classList = "fa-solid fa-play";
    audioEl.pause();
  } else {
    wrapperEl.classList.add("play");
    playBntToggle.classList = "fa-solid fa-pause";
    audioEl.play();
  }
});
changeVolume.addEventListener("input", (e) => {
  audioEl.volume = e.target.value;
});

forwordEl.addEventListener("click", () => {
  currentTrack = (currentTrack + 1) % tracks.length;
  changeTrack(currentTrack);
});

backwordEl.addEventListener("click", () => {
  currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
  changeTrack(currentTrack);
});

let truthy = true;
moodEl.addEventListener("click", () => {
  if (truthy) {
    wrapperEl.style.backgroundColor = "black";
  } else {
    wrapperEl.style.backgroundColor = "rgb(99, 175, 169)";
  }
  truthy = !truthy
});
