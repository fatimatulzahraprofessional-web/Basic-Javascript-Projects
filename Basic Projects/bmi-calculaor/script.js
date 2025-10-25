document.addEventListener("DOMContentLoaded", function () {
    const calculateBtn = document.querySelector("#animatedButton.calculate");
    const bmiButton = document.querySelector("#bmi");

    calculateBtn.addEventListener("click", function (event) {
        event.preventDefault(); 
        if (calculateBtn.innerHTML === "Recalculate") {
            location.reload(); // Refresh the page
            return;
        }
        const height = parseInt(document.querySelector("#height").value);
        const weight = parseInt(document.querySelector("#weight").value);

        if (!height || height <= 0 || isNaN(height)) {
            bmiButton.innerHTML = "Invalid height";
            return;
        }

        if (!weight || weight <= 0 || isNaN(weight)) {
            bmiButton.innerHTML = "Invalid weight";
            return;
        }

        const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);

        bmiButton.innerHTML = bmi;

        calculateBtn.innerHTML = "Recalculate";
    });
});
