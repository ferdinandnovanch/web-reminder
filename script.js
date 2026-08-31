const name = "Sayang"; // Ganti nama di sini
document.getElementById("name").textContent = name;
document.getElementById("year").textContent = new Date().getFullYear();

const answer = document.getElementById("answer");
document.getElementById("yesBtn").addEventListener("click", () => {
  answer.textContent = "Hehe, berarti kita sepakat. ❤️";
  burstHearts();
});

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
musicBtn.addEventListener("click", () => {
  if (!music.src) {
    alert("Tambahkan file musik terlebih dahulu di index.html.");
    return;
  }
  if (music.paused) {
    music.play();
    musicBtn.textContent = "❚❚ Musik";
  } else {
    music.pause();
    musicBtn.textContent = "♪ Musik";
  }
});

function burstHearts() {
  for (let i = 0; i < 18; i++) {
    const h = document.createElement("span");
    h.className = "heart";
    h.textContent = ["♥","♡","❤"][Math.floor(Math.random()*3)];
    h.style.left = Math.random() * 100 + "%";
    h.style.bottom = Math.random() * 15 + "%";
    h.style.fontSize = (14 + Math.random() * 22) + "px";
    h.style.animationDuration = (4 + Math.random() * 4) + "s";
    document.querySelector(".hearts").appendChild(h);
    setTimeout(() => h.remove(), 8000);
  }
}
