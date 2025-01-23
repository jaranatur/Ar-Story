// Funktion zum Starten des Spiels
function startQuiz() {
  console.log("Spiel wird gestartet...");

  // Versteckt den Startbildschirm
  const startScreen = document.querySelector("#start-screen");
  if (startScreen) startScreen.setAttribute("visible", "false");

  // Zeigt die Frage
  const question = document.querySelector("#question");
  question.setAttribute("visible", "true");

  // Zeigt die Transportmittel
  document.querySelector("#fahrrad").setAttribute("visible", "true");
  document.querySelector("#oepnv").setAttribute("visible", "true");
  document.querySelector("#auto").setAttribute("visible", "true");
}

// Funktion zur Verarbeitung der Auswahl einer Option
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
