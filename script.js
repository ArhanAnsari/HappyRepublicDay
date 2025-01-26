// Fireworks Animation
const fireworksContainer = document.getElementById("fireworks-container");
for (let i = 0; i < 50; i++) {
  const firework = document.createElement("div");
  firework.classList.add("firework");
  firework.style.left = `${Math.random() * 100}%`;
  firework.style.animationDelay = `${Math.random() * 2}s`;
  fireworksContainer.appendChild(firework);
}

// Background Music Toggle
const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
musicToggle.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicToggle.textContent = "Pause Music 🔇";
  } else {
    bgMusic.pause();
    musicToggle.textContent = "Play Music 🎵";
  }
});

// Countdown Timer
const countdownTimer = document.getElementById("countdown-timer");
const nextRepublicDay = new Date(new Date().getFullYear(), 0, 26); // Jan 26
if (new Date() > nextRepublicDay) nextRepublicDay.setFullYear(nextRepublicDay.getFullYear() + 1);

function updateCountdown() {
  const now = new Date();
  const diff = nextRepublicDay - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  countdownTimer.textContent = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
}
setInterval(updateCountdown, 1000);

// Reveal Wishes
const wishButton = document.getElementById("wishButton");
const surprise = document.getElementById("surprise");
const customMessage = document.getElementById("customMessage");
const dynamicWish = document.getElementById("dynamicWish");
const dynamicQuote = document.getElementById("dynamicQuote");

const quotes = [
  "Be the change you wish to see in the world. – Mahatma Gandhi",
  "Freedom is not worth having if it does not include the freedom to make mistakes. – Gandhi",
  "A nation's culture resides in the hearts and in the soul of its people. – Gandhi",
];

wishButton.addEventListener("click", () => {
  surprise.classList.remove("hidden");
  dynamicWish.textContent = customMessage.value || "Wishing You a Joyful Republic Day!";
  dynamicQuote.textContent = quotes[Math.floor(Math.random() * quotes.length)];
});
