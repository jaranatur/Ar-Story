// Hinzufügen eines Event Listeners für den START-Button
document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.querySelector("#start-button");

  // Klick-Event für den START-Button hinzufügen
  startButton.addEventListener("click", startQuiz);
});

// Funktion zum Starten des Spiels
function startQuiz() {
  console.log("Spiel wird gestartet...");

  // Versteckt den Startbildschirm
  const startScreen = document.querySelector("#start-screen");
  startScreen.setAttribute("visible", "false");

  // Die folgenden Elemente bleiben vorerst irrelevant
  /*
  // Zeigt die Frage
  const question = document.querySelector("#question");
  question.setAttribute("visible", "true");

  // Zeigt die Transportmittel
  document.querySelector("#fahrrad").setAttribute("visible", "true");
  document.querySelector("#oepnv").setAttribute("visible", "true");
  document.querySelector("#auto").setAttribute("visible", "true");
  */
}
