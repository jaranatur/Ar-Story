// Funktion zur Verarbeitung der Auswahl
function selectOption(option, co2Value) {
    // Feedback aktualisieren
    const feedback = document.getElementById('feedback');
    feedback.setAttribute(
      'text',
      `value: Du hast ${option} gewählt. Dein CO₂-Ausstoß beträgt ${co2Value} kg.`
    );
  }
  