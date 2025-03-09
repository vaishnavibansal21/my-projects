const form = document.querySelector("form");
const results = document.querySelector("#results");
const weightGuide = document.querySelector("#weight-guide");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);

  if (isNaN(height) || height <= 0) {
    results.innerHTML = `<p style="color: black;">Please enter a valid height.</p>`;
    return;
  }
  if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `<p style="color: black;">Please enter a valid weight.</p>`;
    return;
  }

  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  let message = "";

  if (bmi < 18.6) {
    message = "Underweight";
  } else if (bmi >= 18.6 && bmi <= 24.9) {
    message = "Normal Weight";
  } else {
    message = "Overweight";
  }

  results.innerHTML = `<p>Your BMI is <strong>${bmi}</strong> (${message})</p>`;
  
  // Ensure weight guide is visible
  weightGuide.style.display = "block";
});

