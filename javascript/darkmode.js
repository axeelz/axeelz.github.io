const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
const themeColor = document.querySelector('meta[name="theme-color"]');

const currentTheme = localStorage.getItem("theme");

if (userPrefersDark && currentTheme === null) {
	toggleDarkMode();
	themeColor.setAttribute('content', '#000000');
}

if (userPrefersDark && currentTheme == "dark") {
	themeColor.setAttribute('content', '#000000');
}

if (currentTheme == "dark") {
	document.body.classList.add("dark-theme");
}

function toggleDarkMode() {
	document.body.classList.toggle("dark-theme");
	let theme = "light";
	let color = "#FAF8FF";
	if (document.body.classList.contains("dark-theme")) {
		theme = "dark";
		color = "#000000";
	}
	localStorage.setItem("theme", theme);
	themeColor.setAttribute('content', color);
}

