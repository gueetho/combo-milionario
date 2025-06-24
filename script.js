// script.js

// Contador regressivo para urgência
const countdown = document.getElementById("countdown");
const deadline = new Date();
deadline.setMinutes(deadline.getMinutes() + 30); // 30 minutos de urgência

function updateCountdown() {
  const now = new Date();
  const diff = deadline - now;

  if (diff <= 0) {
    countdown.innerHTML = "Oferta expirada!";
    return;
  }

  const minutes = Math.floor(diff / 1000 / 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdown.innerHTML = `${minutes}min ${seconds < 10 ? "0" : ""}${seconds}s restantes`;
}

setInterval(updateCountdown, 1000);
updateCountdown();
