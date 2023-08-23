document.querySelector(".menu-btn").addEventListener("click", function () {
  document.querySelector(".menu").classList.toggle("active");
});

function loadIframe(url) {
  var iframe = document.getElementById("ambilIframe");
  iframe.src = url;
  document.querySelector(".menu").classList.toggle("active");
}

//function untuk langsung ke shortcut link hanya untuk pc
const tombolJalankan = document.getElementById("tombolJalankan");

tombolJalankan.addEventListener("click", function() {
  const iframeElement = document.getElementById("ambilIframe");
  const contentURL = "z_bukus/link_web/link_web.html"; // Ganti dengan alamat yang sesuai
  iframeElement.src = contentURL;
});

// hanya untuk uji web yang akan di tambah
/* 
const iframeElement = document.getElementById("ambilIframe");
const contentURL = "z_bukus/link_web/link_web.html"; // Ganti dengan alamat yang sesuai
iframeElement.src = contentURL;
*/

/* end */
