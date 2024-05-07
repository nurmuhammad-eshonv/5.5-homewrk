const playBtn = document.getElementById("play");
const audioEl = document.getElementById("audio");
const coverEl = document.getElementById("cover");
const wrapperEl = document.querySelector(".wrapper");
const playBntToggle = document.querySelector('#play-btn-toggle')
const changeVolume = document.getElementById('changeVolume')

const tracks = ["Konsta-Insonlar", "Konsta-Odamlar-nima-deydi"];

let currentTrack = 0

const changeTrack = (index) => {
  audioEl.src = `./music/${tracks[index]}.mp3`; 
  coverEl = `./img/${tracks[index]}.jpg`;
};


playBtn.addEventListener("click", () => {
  if (wrapperEl.classList.contains("play")) {
    wrapperEl.classList.remove("play");
    playBntToggle.classList = 'fa-solid fa-play'
    audioEl.pause()
  } else {
    wrapperEl.classList.add("play");
    playBntToggle.classList = 'fa-solid fa-pause'
    audioEl.play();
  }
});
changeVolume.addEventListener('input', (e) =>{
      audioEl.volume = e.target.value
})