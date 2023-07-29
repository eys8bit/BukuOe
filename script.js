// Fungsi untuk mengambil konten dari berbagai alamat menggunakan AJAX
function ambilKonten(url) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      // Set konten yang diambil dari url ke elemen dengan id "konten"
      document.getElementById("ambil").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
