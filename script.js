function setLightTheme() {
	document.body.classList.remove('dark');
	document.body.classList.add('light');
	localStorage.setItem('theme', 'light');
}

function setDarkTheme() {
	document.body.classList.remove('light');
	document.body.classList.add('dark');
	localStorage.setItem('theme', 'dark');
}

function setSystemTheme() {
	document.body.classList.remove('light');
	document.body.classList.remove('dark');
	localStorage.removeItem('theme');
	applySystemTheme();
}

function applySystemTheme() {
	const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
	if (prefersDarkScheme) {
		document.body.classList.add('dark');
	} else {
		document.body.classList.add('light');
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
