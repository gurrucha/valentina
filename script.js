document.getElementById("playButton").addEventListener("click", function () {
  var audio = document.getElementById("audio");
  audio.play();
});

document.getElementById("submitButton").addEventListener("click", function () {
  var userInput = document.getElementById("songInput").value.toLowerCase();
  var correctAnswer = "nombre de la canción"; // Reemplaza con el nombre correcto de la canción

  if (userInput === correctAnswer.toLowerCase()) {
    document.getElementById("result").textContent = "¡Correcto!";
  } else {
    document.getElementById("result").textContent = "Inténtalo de nuevo.";
  }
});
//Reemplaza 'nombre de la canción' con el nombre correcto de la canción que deseas que los usuarios identifiquen.
