const searchInput = document.getElementById("searchInput");
const bukuList = document.getElementById("bukuList").getElementsByTagName("li");

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase();

  for (let i = 0; i < bukuList.length; i++) {
    const tagText = bukuList[i].innerText.toLowerCase();
    if (tagText.includes(searchTerm)) {
      bukuList[i].style.display = "block";
    } else {
      bukuList[i].style.display = "none";
    }
  }
});
