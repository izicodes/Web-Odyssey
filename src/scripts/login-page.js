// Variables
let passwordInput = document.querySelector("#password-input");
let usernameInput = document.querySelector("#username-input");
let okBtn = document.querySelector("#okBtn");
let cancelBtn = document.querySelector("#cancelBtn");

// Empty the input boxes
passwordInput.value = "";
usernameInput.value = "";

// When the user clicks the OK button, they login
okBtn.addEventListener("click", function () {
  if (
    usernameInput.value === "Web Odyssey" &&
    passwordInput.value === "password123"
  ) {
    window.location.href = "pages/home.html";
  }
});

// When the user clicks the cancel button, the input field resets
cancelBtn.addEventListener("click", function () {
  passwordInput.value = "";
  usernameInput.value = "";
});

//  >>> Tips Pop Up <<<
let wrapper = document.querySelector(".wrapper");
let tipDiv = document.createElement("div");
let tipBtn = document.querySelector("#tipBtn");
let tipOKBtn = document.querySelector("#tipOKBtn");

tipBtn.addEventListener("click", function () {
  // TODO: If the popup is already up, disbale the other buttons e.g. OK, Cancel and Tip button

  tipDiv.style.position = "absolute";
  tipDiv.id = "tipsPopUp";
  tipDiv.setAttribute("class", "gui-wrapper nborder show");

  tipDiv.innerHTML = `<div class="gui-header"><h3 class="gui-htitle">Windows Tips</h3><div class="controls-wrap"><p class="nthinborder controls" id="tipsXControl">✕</p></div></div><div class="tipsPopUp-body flexcolcc"><p>Tip: The username is 'Web Odyssey' and the password is 'password123'.</p><button type="button" class="nthinborder nbthin-shadow gui-btn" id="tipOKBtn">OK</button></div>`;

  wrapper.appendChild(tipDiv);
});

tipOKBtn.addEventListener('click', function () {
  tipDiv.remove();
})


// let tipOKBtn = document.querySelector("#tipOKBtn");
// let tipBtn = document.querySelector("#tipBtn");

let popup = document.getElementById("tipsPopUp");
let elements = document.querySelectorAll("div:not(#tipsPopUp)");

if (popup.classList.contains("show")) {
  elements.forEach(function (element) {
    element.style.pointerEvents = "none";
    element.style.cursor = "var(--error)";
  });
}
