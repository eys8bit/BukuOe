document.querySelector(".menu-btn").addEventListener("click", function () {
  document.querySelector(".menu").classList.toggle("active");
});

function loadIframe(url) {
  var iframe = document.getElementById("ambilIframe");
  iframe.src = url;
  document.querySelector(".menu").classList.toggle("active");
}
