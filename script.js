// Sicherstellen, dass die Szene vollständig geladen ist, bevor Event-Listener hinzugefügt werden
document.addEventListener("DOMContentLoaded", () => {
  // Begrüßungstext und Frage-Element auswählen
  const startScreen = document.querySelector("#start-screen");
  const clickableText = document.querySelector("#clickable-text");
  const question = document.querySelector("#question");

  // Event-Listener für "Klicke HIER"
  clickableText.addEventListener("click", () => {
    console.log("Text wurde angeklickt!");
    // Begrüßungstext ausblenden
    startScreen.setAttribute("visible", "false");

    // Erste Frage anzeigen
    question.setAttribute("visible", "true");
  });
});
