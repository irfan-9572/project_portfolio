// Define a function to display a message when the page loads
function displayWelcomeMessage() {
  alert("Welcome to my portfolio website! Feel free to explore.");
}

// Add an event listener to call the function when the page loads
window.addEventListener("load", displayWelcomeMessage);

// Define a function to toggle a dark mode for the website
function toggleDarkMode() {
  // Get the body element
  const body = document.body;

  // Toggle the "dark" class on the body to switch between dark and light modes
  body.classList.toggle("dark");
}

// Add an event listener to a button or element that triggers dark mode
const darkModeButton = document.getElementById("dark-mode-button");
if (darkModeButton) {
  darkModeButton.addEventListener("click", toggleDarkMode);
}
