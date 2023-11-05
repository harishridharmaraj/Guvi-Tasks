var section = document.getElementById("data");
async function getUrl() {
  section.innerHTML = "";
  var finder = document.getElementById("finder").value;

  section.innerHTML = `<img src=https://www.qrtag.net/api/qr_12.png?url=${finder} style='width:300px; height:300px;color:black'> <br> <p>Your URL: ${finder}</p> <br> <a href="https://www.qrtag.net/api/qr_12.png?url=${finder}.png" download="my-QR.png">Download image</a>  `;
}
