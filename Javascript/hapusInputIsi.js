function clearInput() {
  document.getElementById("searchInput").value = "";

  searchButton();
}

//========================================================================================================================
//untuk mencari konten
function searchButton() {
  const searchInputValue = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const cariBukuElements = document.querySelectorAll(".cariBuku");

  cariBukuElements.forEach((element) => {
    const elementText = element.textContent.toLowerCase();

    if (elementText.includes(searchInputValue)) {
      element.style.display = "flex"; // Tampilkan elemen jika sesuai dengan input
    } else {
      element.style.display = "none"; // Sembunyikan elemen jika tidak sesuai dengan input
    }
  });
}

//========================================================================================================================
function redirectToChatGPT() {
  // Simpan URL halaman saat ini sebelum mengarahkan ke chat.openai.com
  var currentPageUrl = window.location.href;

  // Mengarahkan pengguna ke https://chat.openai.com
  window.location.href = "https://chat.openai.com";

  // Simpan URL halaman saat ini ke dalam localStorage
  // sehingga dapat diakses setelah pengguna menekan tombol kembali
  localStorage.setItem("previousPageUrl", currentPageUrl);
}

// Fungsi ini akan dipanggil ketika pengguna menekan tombol kembali
function goBack() {
  // Dapatkan URL halaman sebelumnya dari localStorage
  var previousPageUrl = localStorage.getItem("previousPageUrl");

  // Arahkan pengguna ke halaman sebelumnya (jika tersedia)
  if (previousPageUrl) {
    window.location.href = previousPageUrl;
  } else {
    // Jika URL halaman sebelumnya tidak tersedia, arahkan pengguna ke halaman lain (atau lakukan tindakan lainnya)
    // Misalnya, arahkan ke halaman utama situs Anda:
    window.location.href = "https://www.example.com";
  }
}
