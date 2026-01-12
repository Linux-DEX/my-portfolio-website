document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");

  if (!toggle) return;

  // Apply saved or system theme
  const savedTheme = localStorage.getItem("theme");
  let currentTheme;

  if (savedTheme) {
    currentTheme = savedTheme;
  } else {
    currentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  document.documentElement.setAttribute("data-theme", currentTheme);
  toggle.textContent = currentTheme === "dark" ? "🌙" : "☀️";

  // Toggle theme + icon
  toggle.addEventListener("click", () => {
    currentTheme =
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "light"
        : "dark";

    document.documentElement.setAttribute("data-theme", currentTheme);
    localStorage.setItem("theme", currentTheme);

    toggle.textContent = currentTheme === "dark" ? "🌙" : "☀️";
  });
});
