document.querySelector(".menu-btn").addEventListener("click", function () {
  document.querySelector(".menu").classList.toggle("active");
});

function loadIframe(url) {
  var iframe = document.getElementById("ambilIframe");
  iframe.src = url;
  document.querySelector(".menu").classList.toggle("active");
}

// hanya untuk uji web yang akan di tambah
/* 
const iframeElement = document.getElementById("ambilIframe");
const contentURL = "z_bukus/blender/blender_page/00_catatan.html"; // Ganti dengan alamat yang sesuai
iframeElement.src = contentURL;
*/
/* end */
