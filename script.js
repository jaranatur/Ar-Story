// Start-Button Event Listener
document.getElementById("start-button").addEventListener("click", startQuiz);

// Funktion zum Starten des Quiz
function startQuiz() {
  // Versteckt den Start-Screen
  document.getElementById("start-screen").style.display = "none";

  // Zeige alle Optionen
  document.querySelector("#fahrrad").setAttribute("visible", "true");
  document.querySelector("#oepnv").setAttribute("visible", "true");
  document.querySelector("#auto").setAttribute("visible", "true");

  // Zeige Feedback
  document.querySelector("#feedback").setAttribute("visible", "true");
}

// Funktion zur Verarbeitung der Auswahl einer Option
function selectOption(option, co2Value) {
  console.log(`Option ${option} wurde ausgewählt mit CO₂-Wert: ${co2Value}`);

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
