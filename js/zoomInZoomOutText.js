const container = document.querySelector(".container");
const zoomOutText = document.querySelector(".zoom-out-text");

let initialFontSize = parseInt(getComputedStyle(container).fontSize, 10);

function updateFontSize() {
  const currentFontSize = parseInt(getComputedStyle(container).fontSize, 10);
  const currentZoomLevel = (currentFontSize / initialFontSize) * 100;

  // Perubahan ukuran font sesuai dengan perubahan zoom
  const newSize = (currentZoomLevel / 100) * initialFontSize;
  zoomOutText.style.fontSize = newSize + "px";
}

// Panggil fungsi updateFontSize saat halaman dimuat dan saat window diresize
window.addEventListener("load", updateFontSize);
window.addEventListener("resize", updateFontSize);
