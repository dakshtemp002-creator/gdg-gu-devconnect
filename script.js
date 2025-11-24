// Countdown Timer (mock event date)
const eventDate = new Date("2025-03-15T10:00:00"); // set mock date/time here

function updateCountdown() {
  const now = new Date();
  const diff = eventDate.getTime() - now.getTime();

  const daysEl = document.getElementById("days");
  const hoursEl = document.getElementById("hours");
  const minutesEl = document.getElementById("minutes");
  const secondsEl = document.getElementById("seconds");
  const countdownContainer = document.getElementById("countdown");

  if (diff <= 0) {
    countdownContainer.innerHTML =
      "<span class='countdown-label'>🚀 The event has started or already ended!</span>";
    return;
  }

  const seconds = Math.floor(diff / 1000);
  const days = Math.floor(seconds / (3600 * 24));
  const hours = Math.floor((seconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  daysEl.textContent = days;
  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
  secondsEl.textContent = String(secs).padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Smooth scroll to sections
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Theme toggle with localStorage
const themeToggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const themeLabel = document.getElementById("theme-label");

function applyTheme(theme) {
  const root = document.documentElement;
  if (theme === "dark") {
    root.classList.add("dark");
    themeIcon.textContent = "☀️";
    themeLabel.textContent = "Light mode";
  } else {
    root.classList.remove("dark");
    themeIcon.textContent = "🌙";
    themeLabel.textContent = "Dark mode";
  }
  localStorage.setItem("gdg-theme", theme);
}

// Load saved theme
const savedTheme = localStorage.getItem("gdg-theme");
if (savedTheme) {
  applyTheme(savedTheme);
} else {
  applyTheme("light");
}

themeToggleBtn.addEventListener("click", () => {
  const isDark = document.documentElement.classList.contains("dark");
  applyTheme(isDark ? "light" : "dark");
});

// Registration form success message (email simulation)
const form = document.getElementById("registration-form");
const successMessage = document.getElementById("success-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Simple basic validation (HTML5 required handles most)
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const college = form.college.value.trim();
  const interest = form.interest.value;

  if (!name || !email || !college || !interest) {
    alert("Please fill all the required fields.");
    return;
  }

  // Simulate email/send
  successMessage.classList.add("visible");

  // Optional: reset form fields after "submission"
  form.reset();

  // Remove message after few seconds (optional)
  setTimeout(() => {
    successMessage.classList.remove("visible");
  }, 6000);
});
