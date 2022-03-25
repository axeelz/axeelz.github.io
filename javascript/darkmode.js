const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

const currentTheme = localStorage.getItem("theme");

if (userPrefersDark && currentTheme == null) {
    toggleDarkMode()
}

if (currentTheme == "dark") {
    document.body.classList.add("dark-theme");
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-theme");
    let theme = "light";
    if (document.body.classList.contains("dark-theme")) {
        theme = "dark";
    }
    localStorage.setItem("theme", theme);
}