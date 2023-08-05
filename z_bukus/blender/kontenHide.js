const menuButton = document.querySelector(".menu-konten-btn");
const treeLine = document.querySelector(".treeLine");

menuButton.addEventListener("click", () => {
  treeLine.classList.toggle("hidden");
});

const iframe = document.getElementById("ambil");

// Cek apakah isi iframe telah dimuat
iframe.addEventListener("load", () => {
  treeLine.classList.toggle("hidden");
});
