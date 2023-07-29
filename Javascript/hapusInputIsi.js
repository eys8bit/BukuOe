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
