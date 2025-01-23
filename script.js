// Hinzufügen eines Event Listeners für den Startbildschirm
document.addEventListener("DOMContentLoaded", () => {
  const startScreen = document.querySelector("#start-screen");

  // Klick-Event für den Startbildschirm hinzufügen
  startScreen.addEventListener("click", startQuiz);
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

// Funktion zur Verarbeitung der Auswahl einer Option
// Diese Funktion ist vorerst auskommentiert
/*
function selectOption(option, co2Value) {
  console.log(`Option ${option} wurde ausgewählt mit CO₂-Wert: ${co2Value}`);

  // Ändert den Text des Feedbacks
  const feedback = document.querySelector("#feedback");
  feedback.setAttribute(
    "text",
    `value: Du hast ${option} gewählt. CO₂-Ausstoß: ${co2Value} kg.; color: black; align: center;`
  );
  feedback.setAttribute("visible", "true");
}
*/
