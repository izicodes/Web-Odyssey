// Variables
let passwordInput = document.querySelector("#password-input");
let usernameInput = document.querySelector("#username-input");
let okBtn = document.querySelector("#okBtn");
let cancelBtn = document.querySelector("#cancelBtn");
let tipBtn = document.querySelector("#tipBtn");

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
tipBtn.addEventListener("click", function () {
  console.log("Tips btn works");

  // Make the pop up appear
  let tipsPopUp = document.querySelector("#tipsPopUp");
  tipsPopUp.style.display = "block";

  // Make the buttons in the main window disabled
  okBtn.disabled = true;
  okBtn.style.cursor = "not-allowed";
  cancelBtn.disabled = true;
  cancelBtn.style.cursor = "not-allowed";
  tipBtn.disabled = true;
  tipBtn.style.cursor = "not-allowed";

  // Make the ok button make the popup disappear
  let tipOKBtn = document.querySelector("#tipOKBtn");
  tipOKBtn.addEventListener("click", function () {
    okBtn.disabled = false;
    okBtn.style.cursor = "var(--click)";
    cancelBtn.disabled = false;
    cancelBtn.style.cursor = "var(--click)";
    tipBtn.disabled = false;
    tipBtn.style.cursor = "var(--click)";
    tipsPopUp.style.display = "none";
  });
  
});
