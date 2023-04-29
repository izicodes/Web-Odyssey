// --- Variables ---
let tbody = document.querySelector(".terminal-body");
let ts2 = document.querySelector("#terminal-step2");
let cdInput = document.querySelector("#cdInput");
let startInput = document.querySelector("#startInput");

terminalInputs();

function terminalInputs() {
  // Empty the input boxes
  cdInput.value = "";
  startInput.value = "";

  // Hide input box 2
  ts2.style.display = "none";

  // Show input box 2 when input box 1 is completed
  cdInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      if (cdInput.value === "cd .\\home\\") {
        ts2.style.display = "block";
        cdInput.disabled = true; // disable the cdInput input box
        startInput.focus(); // focus the next input box
      }
    }
  });

  // Show the 'Well Done' text when input box 2 is completed
  startInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      if (startInput.value === "start .\\pages\\home.html") {
        startInput.disabled = true;

        // Create the new text
        let well_done = document.createElement("p");
        well_done.textContent = "Well Done";
        well_done.style.color = "#00FF00";
        well_done.style.fontSize = "13px";

        // Append it to the terminal's body
        tbody.appendChild(well_done);
      }
    }
  });
}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


