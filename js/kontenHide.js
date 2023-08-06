const menuButton = document.querySelector(".menu-konten-btn");
const treeLine = document.querySelector(".treeLine");
const menuKontenBtn = document.querySelector(".menu-konten-btn");

menuButton.addEventListener("click", () => {
  treeLine.classList.toggle("hidden");
});

const iframe = document.getElementById("ambil");

// Cek apakah isi iframe telah dimuat
iframe.addEventListener("load", () => {
  treeLine.classList.toggle("hidden");
  menuKontenBtn.style.display = "block";
});

menuKontenBtn.style.display = "none";

menuKontenBtn.addEventListener("click", () => {
  menuKontenBtn.style.display = "none";
});
