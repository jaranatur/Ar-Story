// Funktion zum Starten des Quiz
function startQuiz() {
  // Versteckt den Start-Screen
  const startScreen = document.getElementById("start-screen");
  if (startScreen) {
    startScreen.style.display = "none";
  }

  // Zeigt die Transportmittel-Optionen an
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

  // Beispiel: Diagramm oder Visualisierung könnte hier ausgelöst werden
  showDiagram(option, co2Value);
}

// Funktion zum Anzeigen eines Diagramms oder einer Visualisierung
function showDiagram(option, co2Value) {
  console.log(`Diagramm anzeigen für ${option} mit CO₂-Wert ${co2Value}`);
  // Platz für Diagramm-Logik oder zusätzliche Interaktionen
}

// Event-Listener für Klicks und Touches hinzufügen (zusätzliche Sicherheit für AR)
document.querySelectorAll("a-entity").forEach((entity) => {
  entity.addEventListener("click", (e) => {
    console.log(`Klick erkannt auf: ${e.target.id}`);
  });

  entity.addEventListener("touchstart", (e) => {
    console.log(`Touch erkannt auf: ${e.target.id}`);
  });
});
