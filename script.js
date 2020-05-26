function viewAnswer() {
  var output = document.getElementById("output");
  var powerbank = document.getElementById("powerbankInput").value;
  var device = document.getElementById("deviceInput").value;
  var outpt = powerbank / device * 0.7;
  
  document.getElementById("output").innerHTML = "Du kan ladda din enhet" + " " + outpt + " " + "Gång/er från denna powerbank!"
  
  if (powerbank > 27800) {
    document.getElementById("outputNumberTwo").innerHTML = "Men du får inte ta med din powerbank på flyget."
  }else {
    document.getElementById("outputNumberTwo").innerHTML = "Du har tur, du får ta med dig din powerbank på flyget."
  }
}