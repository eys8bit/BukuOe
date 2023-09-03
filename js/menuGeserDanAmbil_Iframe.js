document.querySelector(".menu-btn").addEventListener("click", function () {
  document.querySelector(".menu").classList.toggle("active");
});

function loadIframe(url) {
  var iframe = document.getElementById("ambilIframe");
  iframe.src = url;
  document.querySelector(".menu").classList.toggle("active");
}

//function untuk langsung ke shortcut link hanya untuk pc
/**
const tombolJalankan = document.getElementById("tombolJalankan");

tombolJalankan.addEventListener("click", function() {
  const iframeElement = document.getElementById("ambilIframe");
  const contentURL = "z_bukus/link_web/link_web.html"; // Ganti dengan alamat yang sesuai
  iframeElement.src = contentURL;
});
/**/

// Membuat objek media query
const mediaQuery = window.matchMedia("(min-width: 991px)"); // Sesuaikan dengan kondisi yang Anda inginkan

// Fungsi yang akan dijalankan saat kondisi media query sesuai
function handleMediaQueryChange(event) {
  if (event.matches) {
    // Kode yang akan dijalankan saat media query sesuai (lebih dari 991px)
    tombolJalankan.addEventListener("click", function () {
      const iframeElement = document.getElementById("ambilIframe");
      const contentURL = "z_bukus/link_web/link_web.html"; // Ganti dengan alamat yang sesuai
      iframeElement.src = contentURL;
    });
  }
}

// Menjalankan fungsi pertama kali saat halaman dimuat
handleMediaQueryChange(mediaQuery);

// Menambahkan event listener untuk memantau perubahan media query
mediaQuery.addListener(handleMediaQueryChange);

// hanya untuk uji web yang akan di tambah
/* 
const iframeElement = document.getElementById("ambilIframe");
const contentURL = "z_bukus/link_web/link_web.html"; // Ganti dengan alamat yang sesuai
iframeElement.src = contentURL;
*/

/* end */
