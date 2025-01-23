// Sicherstellen, dass die Szene vollständig geladen ist, bevor Event-Listener hinzugefügt werden
document.addEventListener("DOMContentLoaded", () => {
  // Begrüßungstext und Erklärungstext
  const startScreen = document.querySelector("#start-screen");
  const clickableText = document.querySelector("#clickable-text");
  const question = document.querySelector("#question");

  // Event-Listener für "Klicke HIER"
  clickableText.addEventListener("click", () => {
    // Begrüßungstext ausblenden
    startScreen.setAttribute("visible", "false");

    // Erste Frage anzeigen
    question.setAttribute("visible", "true");
  });

  // Event-Listener für Antwortoptionen
  document.querySelector("#bike-option").addEventListener("click", () => {
    alert("Du hast Fahrrad gewählt!");
  });

  document.querySelector("#bus-option").addEventListener("click", () => {
    alert("Du hast Bus gewählt!");
  });

  document.querySelector("#car-option").addEventListener("click", () => {
    alert("Du hast Auto gewählt!");
  });
});
