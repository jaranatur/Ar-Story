// Funktion zum Starten des Quiz
function startQuiz() {
  // Versteckt den Startbildschirm
  const startScreen = document.querySelector("#start-screen");
  startScreen.setAttribute("visible", "false");

  // Zeigt die Frage an
  const questionScreen = document.querySelector("#question-screen");
  questionScreen.setAttribute("visible", "true");

  // Zeigt die Transportoptionen an
  document.querySelector("#fahrrad").setAttribute("visible", "true");
  document.querySelector("#oepnv").setAttribute("visible", "true");
  document.querySelector("#auto").setAttribute("visible", "true");
}

// Funktion zur Verarbeitung der Auswahl einer Option
function selectOption(option, co2Value) {
  console.log(`Option ${option} wurde ausgewählt mit CO₂-Wert: ${co2Value}`);

  // Ändert die Frage zu einem Feedback
  const questionScreen = document.querySelector("#question-screen");
  questionScreen.setAttribute(
    "text",
    `value: Du hast ${option} gewählt.\nCO₂-Ausstoß: ${co2Value} kg; color: black; align: center; wrapCount: 20`
  );

  // Versteckt die Auswahloptionen (optional)
  document.querySelector("#fahrrad").setAttribute("visible", "false");
  document.querySelector("#oepnv").setAttribute("visible", "false");
  document.querySelector("#auto").setAttribute("visible", "false");
}
