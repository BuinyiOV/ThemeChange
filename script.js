function setLightTheme() {
	document.documentElement.classList.remove('dark');
	document.documentElement.classList.add('light');
	localStorage.setItem('theme', 'light');
}

function setDarkTheme() {
	document.documentElement.classList.remove('light');
	document.documentElement.classList.add('dark');
	localStorage.setItem('theme', 'dark');
}

function setSystemTheme() {
	document.documentElement.classList.remove('light');
	document.documentElement.classList.remove('dark');
	localStorage.removeItem('theme');
	applySystemTheme();
}

function applySystemTheme() {
	const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
	if (prefersDarkScheme) {
		document.documentElement.classList.add('dark');
	} else {
		document.documentElement.classList.add('light');
	}
}

function loadTheme() {
	const theme = localStorage.getItem('theme');
	if (theme === 'light') {
		setLightTheme();
	} else if (theme === 'dark') {
		setDarkTheme();
	} else {
		applySystemTheme();
	}
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applySystemTheme);

loadTheme();
