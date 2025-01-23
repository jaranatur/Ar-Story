// Event-Listener für den Start-Button hinzufügen
document.addEventListener("DOMContentLoaded", function () {
  const startButton = document.getElementById("start-button");

  // Button klickbar machen
  if (startButton) {
    startButton.addEventListener("click", function () {
      startQuiz();
    });
  }
});

// Funktion zum Starten des Quiz
function startQuiz() {
  console.log("Quiz wird gestartet...");
  const startScreen = document.getElementById("start-screen");
  if (startScreen) {
    startScreen.style.display = "none"; // Versteckt den Startbildschirm
  }

  // Zeige die Transportmittel
  document.querySelector("#fahrrad").setAttribute("visible", "true");
  document.querySelector("#oepnv").setAttribute("visible", "true");
  document.querySelector("#auto").setAttribute("visible", "true");

  // Zeige das Feedback
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
