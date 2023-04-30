document.addEventListener("DOMContentLoaded", function () {
  const loadingScreen = document.getElementById("loading-screen");

  // Hide the loading screen after 4 seconds
  setTimeout(function () {
      loadingScreen.remove();
      document.querySelector("main").classList.remove("hide");
  }, 4000);
});
