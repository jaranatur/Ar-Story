// Funktion zum Starten des Spiels
function startQuiz() {
  console.log("Spiel wird gestartet...");

  // Versteckt den Startbildschirm und den Start-Button
  const startScreen = document.querySelector("#start-screen");
  const startButton = document.querySelector("#start-button");
  if (startScreen) startScreen.setAttribute("visible", "false");
  if (startButton) startButton.setAttribute("visible", "false");

  // Zeige die Frage
  document.querySelector("#question").setAttribute("visible", "true");

  // Zeige die Transportmittel
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

  // Zeigt ein Diagramm oder Balken mit dem CO₂-Wert
  showDiagram(option, co2Value);
}

// Funktion zum Anzeigen eines Diagramms oder einer Visualisierung
function showDiagram(option, co2Value) {
  const diagram = document.querySelector("#diagram");
  const diagramText = `CO₂-Ausstoß: ${co2Value} kg \n(${option})`;

  diagram.setAttribute(
    "text",
    `value: ${diagramText}; color: black; align: center; wrapCount: 20; font: mozillavr`
  );
  diagram.setAttribute("visible", "true");
}
