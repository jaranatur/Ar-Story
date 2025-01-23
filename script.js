// Funktion zum Starten des Spiels
function startQuiz() {
  console.log("Spiel wird gestartet...");

  // Versteckt den Startbildschirm und den Start-Button
  const startScreen = document.querySelector("#start-screen");
  const startButton = document.querySelector("#start-button");
  if (startScreen) startScreen.setAttribute("visible", "false");
  if (startButton) startButton.setAttribute("visible", "false");

  // Zeigt die Transportmittel an
  document.querySelector("#fahrrad").setAttribute("visible", "true");
  document.querySelector("#oepnv").setAttribute("visible", "true");
  document.querySelector("#auto").setAttribute("visible", "true");

  // Zeigt das Feedback-Feld an
  document.querySelector("#feedback").setAttribute("visible", "true");
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
}
