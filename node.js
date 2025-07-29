function greetUser() {
  const name = document.getElementById('nameInput').value;
  const msg = name ? `Hello, ${name}! 👋` : "Please enter your name!";
  document.getElementById('greetingMsg').textContent = msg;
}

function toggleTheme() {
  document.body.classList.toggle('dark');
}

// Live Clock
function updateClock() {
  const now = new Date();
  document.getElementById('clock').textContent =
    "🕒 Current Time: " + now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// Extra Info Toggle
function toggleExtraInfo() {
  const info = document.getElementById('extraInfo');
  info.classList.toggle('show');
}

