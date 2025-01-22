function selectOption(option, co2Value) {
  
 console.log(`Option ${option} wurde ausgewählt mit CO₂-Wert: ${co2Value}`);
  
  const feedback = document.querySelector("#feedback");
  feedback.setAttribute(
    "text",
    `value: Du hast ${option} gewählt. CO₂-Ausstoß: ${co2Value} kg.; color: black; align: center;`
  );
}
