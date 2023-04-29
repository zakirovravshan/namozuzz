export function getCurrentTheme() {
	const savedTheme = localStorage.getItem('theme');
	if (savedTheme === 'dark') {
		return 'dark';
	} else {
		return 'light';
	}
}
