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
